# https://github.com/prisma/prisma-examples/blob/prisma2/deployment-platforms/docker/Makefile

TAG=latest
IMAGE_NAME=service

DOCKER_IMAGE=${IMAGE_NAME}:${TAG}

.PHONY: build

build:
	docker build . -t ${DOCKER_IMAGE} --no-cache

run:
	docker run -it -p 4000:4000 ${DOCKER_IMAGE}