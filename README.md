
# Project Skeleton based on express


The following software shall be installed:

* **[NodeJS](http://nodejs.org)** v. 10.x
* **[eslint](https://www.npmjs.com/package/eslint)** v.5.16.0 
* **[Redis](https://redis.io/)** v.3.0.6 


## NPM scripts
All script placed in **[package.json](./package.json)**

* ```npm install``` - install all dependencies and creates an .develop.env for local development with Composer
* ```npm version [patch|minor|major]``` - create a commit with git-tag to update a version 
* ```npm start``` - run application on any environment
* ```npm run lint``` - runs a eslint linter from node_modules with local **[.eslintrc.js](./.eslintrc.js)**
* ```npm test``` - will run all existing tests. Unit tests + integration tests
* ```npm run integration-tests``` - will run all existing tests only integration tests with placing all created coverage data in **[coverage](./coverage)** folder
* ```npm run unit-tests``` - will run only unit tests and shows coverage for used files


## Git Hooks

### pre-commit
Before each **commit** will runs linter with basic unit test to check code works.

### pre-push
Before each **push** will run linter and full set of Tests: Unit + Integration + Coverage generation


## Environment

#### ENV variables:
* NODE_ENV - current node environment


### Docker-Composer 
Just ensure thar you have the right version of docker (or change the version in docker-compose.yam file) and run the next comman

```
docker-compose up

```


## Load Tests 

### Run

To run load tests, please ensure that *redis-server* started and run the next command:
```
npm run load-tests
```

### Results

```
Started phase 0, duration: 60s @ 20:32:21(+0200) 2019-11-15
Report @ 20:32:31(+0200) 2019-11-15
Elapsed time: 10 seconds
  Scenarios launched:  199
  Scenarios completed: 191
  Requests completed:  785
  RPS sent: 80.1
  Request latency:
    min: 1.3
    max: 345.4
    median: 36.5
    p95: 215.6
    p99: 274.5
  Codes:
    200: 191
    201: 199
    301: 196
    302: 199

Report @ 20:32:41(+0200) 2019-11-15
Elapsed time: 20 seconds
  Scenarios launched:  201
  Scenarios completed: 200
  Requests completed:  802
  RPS sent: 80.14
  Request latency:
    min: 1.3
    max: 248.5
    median: 10.2
    p95: 201
    p99: 223.4
  Codes:
    200: 200
    201: 201
    301: 200
    302: 201

Report @ 20:32:51(+0200) 2019-11-15
Elapsed time: 30 seconds
  Scenarios launched:  201
  Scenarios completed: 160
  Requests completed:  708
  RPS sent: 74.63
  Request latency:
    min: 1.3
    max: 1754.8
    median: 401.2
    p95: 1361.5
    p99: 1605.6
  Codes:
    200: 161
    201: 188
    301: 171
    302: 188

Report @ 20:33:01(+0200) 2019-11-15
Elapsed time: 40 seconds
  Scenarios launched:  200
  Scenarios completed: 242
  Requests completed:  897
  RPS sent: 85.61
  Request latency:
    min: 1.2
    max: 5778.4
    median: 161.4
    p95: 490.4
    p99: 822.9
  Codes:
    200: 241
    201: 213
    301: 230
    302: 213
```
