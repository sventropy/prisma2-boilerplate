# GraphQL Backend Boilerplate based on Prisma2, TypeScript and GraphQL Nexus

## Prisma2 Template

For more information on prisma, go to https://github.com/prisma/prisma. This project is based on https://github.com/prisma-labs/nexus-prisma/tree/master/examples/blog

**Disclaimer**: This "playground" project does not use a dedicated DBMS, but relies on the SQLite adapter built into Prisma 2. Hence data will be always reset, when the project is for example re-deployed to a Docker-based infrastructure.

## CloudFormation

In `infrastructure/cloudformation`, you'll find templates to create infrastructure to run on this service on AWS. These templates always contain a complete stack, which is not a best-practice for any productive use. Look at multiple stacks and [nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html) instead to keep changes manageable.

### ECS Fargate

The `ecs-fargate.yml` template, creates a stack containing:
- A single VPC
- Two public subnets
- An application load balancer
- A single ECS cluster
- A single ECS service and task definition of launch type FARGATE
- A code pipeline, building a Docker image based on `./Dockerfile` and deploying it to ECS Fargate

