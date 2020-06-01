# prisma2-boilerplate

This is a graphQL backend boilerplate based on `prisma2`, `typescript` and `graphql-nexus`.

For more information on prisma, check [their project](https://github.com/prisma/prisma). This boilerplate is based on the `nexus-prisma` [examples](https://github.com/prisma-labs/nexus-prisma/tree/master/examples).

## How to... ❔

### ...run the boilerplate

1. `git clone`
2. `npm i`
3. Copy `.env.example` to `.env`
4. Maintain DB url in prisma file (see [this section](#dockerfile-%f0%9f%90%b3) why)
5. `docker-compose up`
6. `npm run migrate` to apply DB schema
7. (Optional) `npm run seed` to generate test data
8. `npm start`

## Database #

This boilerplate assumes a postgres database, which can be created on your local machine with the `docker-compose.yml` file. Simply run `docker-compose up -d`.

## Data Model 🔢

This boilerplate follows the schema-first approach of prisma and defines a `Header` and `Item` entity, with a `1-n` relationship. Check `./src/types/` for the specifics on the queries and mutations implemented as examples. You'll also find computed properties and raw SQL database access.

## Dockerfile 🐳

This service is meant to be run in a container. Configuration happens through the `.env` file (copy from `.env.example`)

⚠️ Currently, an issue with prisma prevents using the DATABASE_URL environment variable, hence that URL is hard-coded for the time being in the schema file. Obviously, **this is not recommended to do in a real project** 🚨.

## Authentication and Permission 🔐

This templates provides a simple mechanism based on `graphql-shield` to implement authentication and check permissions. Currently, the implementation checks the existence of an `"Authentication":"Bearer <any string value>"` header for some of the apis. 

Check `./permissions/index.ts` for more info.

## Feedback 

Feel free to reach out here, on my [website](https://hennessen.net) or on [Twitter](https://twitter.com/svenhennessen). I am looking forward to it. Cheers! 👋🏻


