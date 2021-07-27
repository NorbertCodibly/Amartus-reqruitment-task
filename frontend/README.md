## Running the application

To run the application enter one of the following commands (depending on the package manager that you are using):

- `yarn start`
- `npm run start`

Preferable is using the `yarn` package manager in this project, but `npm` should work just fine.

Additionally the application is depending on the data, that can be retrieved from the `backend` side of the application.  
So make sure, that you're running the `backend` side of the application, while running the `frontend` side.

Example commands to run both sides of the application (from the `frontend` directory) may look like:

```
cd ../backend && yarn start
yarn start
```

## App environment variables

All env variables should be declared inside the `.env` file.  
List of the currently supported environment variables:

- `API_HOST`  
  Determines the hostname address for the nodes API.
