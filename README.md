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

Proceed to compile and execute your JavaScript file.

`docker compose run --rm npm run dev`
