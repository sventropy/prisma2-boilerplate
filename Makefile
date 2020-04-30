# Based on https://github.com/prisma/prisma-examples/blob/prisma2/deployment-platforms/docker/Makefile


.PHONY: build

TAG=latest
IMAGE_NAME=service
PORT=9222
DOCKER_IMAGE=${IMAGE_NAME}:${TAG}

.PHONY: build run

all: build

build:
	docker build . -t ${DOCKER_IMAGE} --no-cache

run:
	docker run -it -p ${PORT}:${PORT} ${DOCKER_IMAGE}
