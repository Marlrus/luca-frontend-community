# Frontend Repo

Done with Create React App using TypeScript for the frontend. To manage state, I will use redux along with redux-thunk for async actions. Since the repo uses TypeScript, it is self documenting for anyone working on it. This makes the repo much more robust and stable in the long term.

## Running the Repo

For the app to function, the server from the backend repo must be running locally.

### Requirements

- Node (14.x recommended)
- Yarn (recommended)

Without yarn, replace commands with npm install, npm run start.

### Instalation

`yarn install`

### Running the Repo

`yarn start`

The app runs on localhost 3000

## Page Flow

The App component is the root route /, to simulate being in the /commuinty page the app re-routes you to that page. This page lists the questions using the pagination from the API and uses infinite scroll to fetch questions until there are no more left. The database is seeded with 300 questions. When entering the application, a user will be fetched from the DB to mock a login and allow the creation of new questions.

The user can navigate using the buttons to the /community/question/new that will take him to a form where a question can be sumbitted. Both fields are required and have validation messages that can be tested. Once the question is published, the button is disabled in the background until the question is created. The user will then be re routed to the /community route and the questions will be re fetched and the users question will be seen there. If the question belongs to the user, you will see the username replaced with "tuya" and the color of the text will be slightly different. Since the DB was seeded at random, there could be more questions belonging to the user you are "logged in to"

## Folder Structure

- src/ contains everything react related
- components/ holds re-usable components as well as sections
- pages/ holds pages that contain sections
- redux/ holds everything related to redux state management

## Component Structure

Pages -> Sections -> Components

Pages are meant to contain sections, sections contain components. Components are meant to be almost single concern and re-usable, with spare logic.

## State Management Redux

Redux will be used for state management which is the go-to tool for state management in large apps. Files for each section of the pipeline are in their folders.

Since Types are mostly used in the state management tool, the types/ directory is in the redux/ directory.

Redux Thunk is used for async actions.

## Fonts

The Inter and Poppins fonts were added to the global css file and can be accesed on different weights accross the repo easily.

## Color codes

The StyleConstants.ts file holds all the colors used in the repo, which makes it easy to change a color accross the repo with the change of one variable.

## Icons and Logos

The IconstAndLogos.ts files holds all the paths to use all the icons from the project with a simple import statement. This makes working with logos a lot easier inside an img tag. All the icons were downloaded in SVG because it is the most flexible, lossless, and lightest way to store these kinds of icons.

## Styled Components

Styled components is a CSS in JS solution that allows for flexible styling and easier integration with props.

## Breakpoints

All breakpoints are managed from the size object in StyleConstants.ts, these breakpoints are used in media queries but also in react-responsive for conditional dynamic rendering. If the breakpoints were to change, altering the size object will do it accross the repo.

## Responsive Decisions

The tool of choice to manage responsiveness outside of media queries was react-responsive using the same breakpoints. The design for Mobile was shared for tablet too. To test it out use the responsive layout in Chrome dev tools.

## Project scaling

Due to having to share the project, there is no env file here either. In a larger project env variables would be created for dev and prod.

## Third Party Libraries

1. Formik

Formik was used for form submission and validation. It is very flexible and easily integrated into the custom components created for the UI.

2. Yup

This library is used for validation and integrates very well with Formik.

### UI Libraries

No Third party UI libraries were used for this project. The components in the project are beta versions of what could be used in a UI kit that would allow for very quick building and integration.
