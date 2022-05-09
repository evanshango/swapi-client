### SWAPI CLIENT
This project is a client service implemented with Angular and graphQL. It does consume a custom backend service API implemented with Spring boot and GraphQL.
The backend service is available from the following link [https://github.com/evanshango/swapi-graphql "Swapi-GraphQL"]

1. Follow the instructions detailed on the project linked to the url provided
2. Once everything is set, you can proceed with the following steps
3. Clone this project and save it in your preferred location where you can be easily access it.
4. Once the download has completed, run the following command after navigating to the location in which the project was
   saved. `npm i` to install the necessary dependencies. Once the dependency installation has completed run the command
   `ng serve -o`. Your browser should automatically open having compiled the project code, you should be taken to the
   homepage of the project.

#### Docker Option
The project has an attached docker file as part of the project files. If you have docker installed on your machine, you can proceed with the below steps
1. Run the command `docker build -t swapi-client .`. Once the build process has completed proceed to the next step
2. Run the command `docker run -dp 4200:80`. Open your favorite browser and navigate to the url `http://localhost:4200`.
3. If everything run successfully, you should be navigated to the home page of this project with some star wars characters loaded.


