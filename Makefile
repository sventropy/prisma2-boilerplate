# https://github.com/prisma/prisma-examples/blob/prisma2/deployment-platforms/docker/Makefile

TAG=latest
IMAGE_NAME=service
PORT=9222
DOCKER_IMAGE=${IMAGE_NAME}:${TAG}

FARGATE_STACK_NAME=my-fargate-stack

.PHONY: build

build:
	docker build . -t ${DOCKER_IMAGE} --no-cache

run:
	docker run -it -p ${PORT}:${PORT} ${DOCKER_IMAGE}

create-fargate:
	aws cloudformation create-stack --stack-name ${FARGATE_STACK_NAME} --template-body "file://infrastructure/cloudformation/ecs-fargate.yml" --capabilities CAPABILITY_NAMED_IAM --parameters "file://infrastructure/cloudformation/ecs-fargate-params.json"

update-fargate:
	aws cloudformation update-stack --stack-name ${FARGATE_STACK_NAME} --template-body "file://infrastructure/cloudformation/ecs-fargate.yml" --capabilities CAPABILITY_NAMED_IAM --parameters "file://infrastructure/cloudformation/ecs-fargate-params.json"

delete-fargate:
	aws cloudformation delete-stack --stack-name ${FARGATE_STACK_NAME}

events-fargate:
	aws cloudformation describe-stack-events --stack-name=${FARGATE_STACK_NAME} --max-items=3

cancel-fargate:
	aws cloudformation cancel-update-stack --stack-name ${FARGATE_STACK_NAME}