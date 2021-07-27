## Running the application

To run the application enter one of the following commands (depending on the package manager that you are using):

- `yarn start`
- `npm run start`

Preferable is using the `yarn` package manager in this project, but `npm` should work just fine.

## App environment variables

All env variables should be declared inside the `.env` file.  
List of the currently supported environment variables:

- `APP_PORT`  
  Determines the port on which application should be running.  
  If none is being provided, then the default port (`3000`) is being used.
