# Shatez backend interview: About this project 📚🙋

This is a boilerplate backend project intended to have feature based task lists for Shatez backend interviews. It is built with NestJs & TypeScript.

It is not integrated with a DB yet, but potentially to be integrated with MongoDB and/or Postgres (from Supabase).

## Built with 🛠️

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Getting Started 🚀

- This is a very simple API written with TS, NestJs that has 4 different routes
  - `/` - Root route
  - `/api` - Swagger UI for OpenAPI documentation
  - `/health` - Health check route for application liveness (If the application is alive or not, think of it like a heartbear)
  - `/ready` - Rediness check for the application (If the application is ready to serve traffic or not)
- Follow the `ReadME` instructions to get started with the project & figure out what your tasks are
- If anything is unclear, feel free to make necessary assumtions
- Proper use of the `The Web` & `AI tools` is `Highly Encouraged` to complete the tasks

### Installation 📦

```bash
$ npm install
```

### Run app locally 🏃

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- navigate to http://localhost:3000 to see the root route
- navigate to http://localhost:3000/api/ to see the Swagger UI for OpenAPI documentation

### Run tests 🧪

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Feature based task lists 🛠️

### 🟢 `Feature Task-1: Easy`

- `Containerize` the application with `Docker`
- `What we'll evaluate` :
  - If you're familiar with Docker & if you can containerize a simple application
  - If you're not familiar with Docker, how you learn, adapt & implement new technologies

### 🟡 `Feature Task-2: Medium`

- At present this API is not connected with any Database. But whenever a usecase of Data persistence arises, we'll need to connect it with a DB.
- Your task is to connect with a Database of your choice (between MongoDb, Postgres from Supabase or Google Firestore from firebase) and refactor the `/ready` route to check if the DB is ready to serve traffic or not (database connection is established or not)
- Make a developer documentation for your solution, named `feature2.md`, having how you solved the problem, what you did & why you did it that way & any necessary assumptions you made
- `Bonus Points` : At present we're skipping the unit tests for `/ready` route since its broken. Fix the unit tests & add some more scenarios once you're done with the above task.
- Assumptions:
  - Make any necessary assumptions you need to make for the implementation
- ` What we'll evaluate` :
  - What kind of code & best-practice you follow for adding something as simple as database connectivity
  - How you organize & structure your code
  - How you go about testability of your code

### 🟠 `Feature Task-3: Hard`

- At this state, this is a boilerplate containerized API with a liveness & readiness check.
- At this point, we'd like to add more routes to the API, so we can app more functionalities to the API.
- Your task is to add `User Authentication` functionality to the API. Authentication is the process of verifying who the user is. For that, you'd need to do 3 things:
  - Add some resource based CRUD (Cretae, Read, Update, Delete) endpoints
  - Model data for the resources.
  - Integrate with a BAAS (Backend as a Service) provider for Authentication (Firebase Auth, Supabase Auth) for simplicity
- Make a developer documentation for your solution, named `feature3.md`, having how you solved the problem, what you did & why you did it that way & any necessary assumptions you made
- `Bonus Points` : If you can use an ORM (Object Relational Mapper) like Mongoose or TypeORM & add unit tests to the new routes you add
- Assumptions:
  - Make any necessary assumptions you need to make for the implementation
- ` What we'll evaluate` :
  - How you model you data
  - How you organize & structure your code
  - How you go about testability of your code
  - How you think about data flow & scalability of your solution
  - How you go about venturing uncharted territories, learning from the web & coming up with a solution

## How to submit your solutions ✍️

- Fork this repository & make it private
- Create a feature branch while working on your solution. For example, if you're working on `Feature Task-1: Easy`, you can create a branch called `feature/task-1`
- Once you're done, create a pull request to the `main` branch of the repository & Merge it. Don't delete the feature branch on merge as we'll look at the commit history of the feature branch.
- Make sure its a private and invite `abinhossain@shatez.com` for evaluation.
- Once the evaluation is complete, we'll reach out to you if you're selected for the next round.

### License

Nest is [MIT licensed](LICENSE).
