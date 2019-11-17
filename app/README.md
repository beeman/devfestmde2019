# GraphQL with Angular

## Installation

### Prisma

##### Install Prisma cli

```shell script
npm install -g prisma
```

#### Run Prisma container in Docker
```shell script
docker-compose up -d
```

##### Deploy Prisma datamodel
```shell script
yarn prisma:deploy
```

### API

##### Go to API dir
```shell script
cd api
```

##### Install dependencies
```shell script
yarn
```

##### Run initial build
```shell script
yarn build
```

##### Start development server
```shell script
yarn start:dev
```

The API should run on port 3000.

## Website

##### Install dependencies

```shell script
yarn
```

##### Run development server

```shell script
ng serve
```

## GraphQL Codegen

##### Run the generator

This will generate an Angular SDK for the API in `app/src/sdk/generated` based on the queries defined in `app/src/sdk/queries`.

```shell script
yarn graphql
```

##### Run the generator in watch mode

This runs the above process in watch mode, triggering generation after changes in `app/src/sdk/queries`

```shell script
yarn graphql:watch
```


