

\# Express Frontend - Jenkins CI/CD



\## Overview

An Express.js web service with automated tests and a Jenkins CI/CD pipeline.



\## Features

\- Express.js REST endpoints

\- Health check endpoint

\- Greeting endpoint

\- Automated tests

\- Jenkins CI/CD pipeline



\## Technology Stack

\- Node.js

\- Express.js

\- Automated tests

\- Jenkins

\- Git and GitHub



\## API Endpoints

| Method | Endpoint | Description |

|---|---|---|

| GET | `/` | Welcome message |

| GET | `/health` | Health check |

| GET | `/api/greet/:name` | Greeting response |



\## Run Locally

Install dependencies and start the application:



```bash

npm ci

npm start

```



\## Run Tests

```bash

npm test

```



\## CI/CD

The `Jenkinsfile` defines the pipeline for installing dependencies, running tests, and performing deployment steps.



\## Repository

https://github.com/DachepallySahithi/jenkins-cicd-express-frontend



