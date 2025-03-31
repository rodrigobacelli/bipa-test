# CryptoWatcher
This is the repository for the MVP listing the top 100 connected nodes in Lightning network as part of the application to Bipa. It was bootstrapped using Vite, configured to run React and TypeScript. 

## Libraries & frameworks used

- [Vite](https://www.npmjs.com/package/vite) to bootstrap the project
- [React](https://www.npmjs.com/package/react) as the Front-End library to write the components and pages
- [TypeScript](https://www.npmjs.com/package/typescript) as the base language of the project
- [TailwindCSS](https://tailwindcss.com/) for styling the project
- [Tanstack Query React](https://tanstack.com/query/latest/docs/framework/react/overview) for data fetching and state manipulation
- [date-fns](https://date-fns.org/) to handle dates
- [Vitest](https://vitest.dev/) with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for writting testing
- [MSW](https://mswjs.io/) to create mocks and tests of the API
- [react-data-table-component](https://reactdatatable.com/) to help with data visualization
- [React Icons](https://react-icons.github.io/react-icons/) as the Icons library
- [ESLint](https://eslint.org/) as the code style fixer and [Prettier](https://prettier.io/) to format code

# Requirements
In order to run this project you need to make sure you have Node 20+ and NPM 9+ installed.

[Get Latest Node Version](https://nodejs.org/en/download)

## Steps to run

To run the project you first need to clone, access the project root folder and clone the repository:

```bash
git clone https://github.com/rodrigobacelli/bipa-test.git
```

Access the project root folder:

```bash
cd bipa-test
```

Install project dependencies:

```bash
npm install
```
Start the server:

```bash
npm run dev
```

After the server start to run, you can access the application in your browser by accessing `http://localhost:<configured-port>`. By default, Vite runs the dev server in (http://localhost:5173/)[http://localhost:5173/], but you can customize the door by setting the flag in the start command:

```bash
npm run dev -- --port=<port-number>
```

## Steps to build

To build the project you first need to clone, access the project root folder and clone the repository:

```bash
git clone https://github.com/rodrigobacelli/bipa-test.git
```

Access the project root folder:

```bash
cd bipa-test
```

Install project dependencies:

```bash
npm install
```
Build the project:

```bash
npm run build
```

Use your prefered tool to create the server and run the code in `/dist` folder. [Serve](https://www.npmjs.com/package/serve) is the recommended way of running the build:

```bash
npx serve -s ./dist -port 3000
```

## What areas of the web app did you focus on?

The focus in this project was fulfilling the main requirements of the test, and setting up the tools to make the parts that weren't finished in time. 

Example: The project lacks core functionalities testing, but tests and configurations for testing hooks and pages are already available in the application.

## What was the reason for your focus? What problems were you trying to solve?

The reason for the focus was having an application running and showing the data as the requirements, this way creating an MVP. Also, properly configuring the application architecture ensures that the MVP can be easily improved. 

## How long did you spend on this project?

This project took around 5 hours to get to this state.

## Did you make any trade-offs for this project? What would you have done differently with more time?

The main trade-off was sacrificing tests, design and adding a Data Table external library, all in order to stay as close as possible to the available time, but displaying the abilities to understand the project requirements and develop them.

If the there was more time, the first part to tackle should be the tests, ensuring that the core of the application is well tested. Another thing that would be different is displaying the data in a custom Data Table, improving styling and visualization of the data, adding simple animations to show when data increased (green labels) or decreased (red labels).

And last, but not least, with more time this project would be done in Svelte.

## What do you think is the weakest part of your project?

There are two parts that are equally weak in this project:

- Design: The project design as it's not as pleasant that it could be, as it lacks proper sizing of strings and improved views.
- Tests: The tests are configured and some are present, but the tests don't properly test the core parts of the application.

## Is there any other information you’d like us to know?

Having up to 5h to develop the application, React was the choice to create an MVP in the available time, as I didn't feel confident enough to make it in Svelte at this moment. It's not a problem working with it, but I lack the same experience as I have with React.