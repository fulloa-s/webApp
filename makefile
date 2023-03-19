NAME = training
START_PATH = ./srcs/

all: up

up:
	@ docker-compose up -d --build

up-f:
	@ docker-compose up -d --build frontend

start:
	@ docker-compose start

stop:
	@ docker-compose stop

clean: stop
	@ docker-compose down -v --remove-orphans

fclean: clean
	@ docker rmi -f $$(docker images -aq)

show_database:
	docker exec server /bin/sh -c "npx prisma studio &"

nodeclean: 
	@ sudo rm -rf ./srcs/frontend/my-app/node_modules
	@ sudo rm -rf ./srcs/backend/my-app/node_modules


reload: stop start

re: fclean all

.PHONY: stop clean reload all%