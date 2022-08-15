# Application decisions

This project has been built on top of React.
Typescript has been chosen over Javascript due to the fact that it is more realiable, easier
to refactor and allows you to avoid errors and provide types.

Context API has been chosen in order to have a centralized store with values
values being accessible everywhere across the application without the need to pass
them as props to multiple nested levels of components.

I also have implemented the use of react useReducer hook combined with the context: in my opnion
a more appropriate hook to use compare to useState for nested object data.

Performance optimization has also been taken in consideration and
using memoization techniques to cache results and improve overall performance.
Considering that the API has a delay of 1.5s, a custom hook has been implemented
in order to store the API url and its response in the browser local-storage
for subsequents app reloads.

Depending on the API state I either display one of the following pages:

    - Loading page ---> to warn the user that the API call is taking a bit long
    - Error page ---> to let the user know something went wrong
    - Content which consists in 3 different dynamic routes:
        - Products page
        - Basket page
        - Categories page

I have also implemented a search debounce functionality (in the products page) that allows the
user to search for specific items based on key typed inside the input-box after 1s.

I came up with the overall design and applied responsivness following mobile-first design approach.
SCSS modules have been chosen for this project since it helps to create separate SCSS files for each component and is local to that particular file and avoids class name collision.

NOTE: the application could be improved with new features and I would be more
than willing to disuss about those with you.

Thank you for your time and hope you will enjoy this SPA.
The app has been deployed on Vercel and can be found at the following link:
https://book-store-omarbaldi.vercel.app/products

# Application stack

- React (Built-in hooks & Custom hooks)
- Typescript
- SCSS modules
- Context API
- React Router DOM (v6)
- Axios

# Installation and Setup Instructions

Clone the repository on your local machine and type

### `npm install`

to install all the necessary dependencies.

To start the development server, type the following command

### `npm start`

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.
While on development mode, the page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
