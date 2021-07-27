## Running the application

Application is divided into 2 parts:

- `frontend`
- `backend`

To run the whole application it's necessary to run both of those application parts.

Because of the fact, that the `frontend` is dependant on the data retrieved from the `backend`, it's recommended to run the `backend` server first.

You can do so, with the usage of a commands, depending on which package manager would you like to use.  
Application was initially built on the `yarn` so it may be advised to use this package manager (but `npm` should be able to run the application as well).

List of the commands:

```bash
cd backend && yarn start
cd frontend && yarn start
```

or

```bash
cd backend && npm run start
cd frontend && npm run start
```

## Running the application for the first time

If you are running the application for the first time, then you'll have to install all the dependencies (for the both `frontend` and `backend` parts of the application).

You can do so with one of the commands (executed inside `backend`/`frontend` directory):

- `yarn install`
- `npm install`

## More documentation

More documentation is available on the `frontend` and `backend` directories, when it's being stored inside the `README.md` file.
