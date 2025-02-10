# Laravel Code Challenge

This challenge is to assess a small range of your Laravel knowledge. We would like you to spend no more than 2 hours on this task. It's not a problem if you don't finish everything in the task. The goal is to get a clear view of how you think and work.

## The Challenge
The challenge will contain a few core features most applications have. That includes connecting to an API, basic MVC, exposing an API, and finally tests.

The API we want you to connect to is https://official-joke-api.appspot.com/jokes/programming/ten/

The application should have the following features

### Must haves
- A web page that shows 3 random jokes
- A button to refresh the jokes on the page
- An API route should be available to fetch the 3 jokes for the page
- Create tests for the application
- Provide a README on anything we need to set up and test the application

### Nice to haves
- Authentication for the page should be done with a password 
- The API route is secured with a token

### Notes
HTML/CSS/JS styling is not required at all. It doesn't matter how this application looks, only how it functions.

New Project Auth: Zavian Braithwaite

## Project Setup Steps

Please follow these instructions to set up the project.
### Step 1: 

> 1. Install Docker on your system.

> 2. Git pull Repository.

### Step 2: 

> 1. Copy the docker-compose.example file and rename new file as docker-compose.yml

> 2. Copy the env.example file and rename the new file .env and adjust the ports as necessary if ports need changing.

> 3. Run the following in the project directory to start up the container and install dependencies:

`docker-compose up -d --build`

Make sure all containers are up and running

`docker-compose run --rm composer install`

### Step 3: 

Generate the application key and storage link using following command:

`docker compose run --rm artisan key:generate`

### Step 4: 
Run the following command to migrate and seed the database migration
```
docker compose run --rm artisan migrate

### Step 5: 

`docker compose run --rm npm install`

### Step 12: 
Run the following to install JavaScript packages
 
`docker compose run --rm npm install`

Proceed to compile and execute the JavaScript file.

`docker compose run --rm npm run dev`
