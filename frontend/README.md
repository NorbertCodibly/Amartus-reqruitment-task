## Running the application

To run the application enter one of the following commands (depending on the package manager that you are using):

- `yarn start`
- `npm run start`

Preferable is using the `yarn` package manager in this project, but `npm` should work just fine.

Additionally the application is depending on the data, that can be retrieved from the `backend` side of the application.  
So make sure, that you're running the `backend` side of the application, while running the `frontend` side.

Example commands to run both sides of the application (from the `frontend` directory) may look like:

```bash
cd ../backend && yarn start
yarn start
```

## Running the application for the first time

If you are running the application for the first time, then you'll have to install all the project dependencies.

You can do so with one of the commands:

- `yarn install`
- `npm install`

## App environment variables

All env variables should be declared inside the `.env` file.  
List of the currently supported environment variables:

- `API_HOST`  
  Determines the hostname address for the nodes API.  
  From this address application will try to get the nodes data.

## DTO

`DTO` stands for Data Transfer Object and it's essentially concept that involves interface, that is being used during the communication with the API.  
(when the data is being send to the endpoint and when it's being fetched)

It helps with respecting the contract (eg. established between `frontend` and `backend`), by representing it in form of the interface, from which it can be mapped to the interal structure.
