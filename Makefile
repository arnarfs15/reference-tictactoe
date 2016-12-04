ifndef TAG
  #needs to be a project stored in git, gets the short commit sha
	TAG := $(shell git rev-parse --short HEAD)
endif
ifndef PROJECT_NAME
  #Change to the name of you project
	PROJECT_NAME := reference-tictactoe
endif
ifndef USERNAME
  #Change  to your dockerhub username
	USERNAME := arnarfs15
endif
ifndef IMAGE_TAG
  #Change <username> to your dockerhub username
	IMAGE_TAG := ${arnarfs15}/${PROJECT_NAME}:${TAG}
endif

build:
	sudo docker build -t ${IMAGE_TAG} .
run:
	sudo docker run -p "3000:3000" -d ${IMAGE_TAG}
docker-test:
	#add '--net host' if you want to connect to redis container runnin in another container on host or use docker compose with the ' command: 'npm test' '
	sudo docker run -it ${IMAGE_TAG} npm test
postgres:
	#code taken from readme.md at project root
	#sudo docker run -p 5432:5432 --name pg2 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
compose:
	sudo docker-compose up -d --build
