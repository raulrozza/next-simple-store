# Next Simple Store

This is a simple store app where the user can register customers, products and then order some of those products. The main goal of the app is to test NextJS as a backend using tRPC and Prisma.

You can check the live demo [by clicking here](https://next-simple-store.vercel.app/).

## Tools

The main tools used for this project are:

- [NextJS](https://nextjs.org/): One of the best React frameworks with support for SSR and lambda.
- [tRPC](https://trpc.io/): Typesafe API framework with a very nice integration with Next.
- [Prisma](https://www.prisma.io/): Typesafe ORM that makes migrations really easy.

Supporting tools:

- [ESLint](https://eslint.org/): JS linter which I can't live without.
- [Formik](https://formik.org/): Open source form library with a very nice hook API.
- [Jest](https://jestjs.io/pt-BR/): JS testing framework which I like the most.
- [React Testing Library](https://testing-library.com/): Pretty cool testing utilities to use with Jest for testing react componentes. Helps make your tests more user-interaction-oriented.
- [Recoil](https://recoiljs.org/): A state management library for React made by the React devs. Easy to use.
- [Styled Components](https://styled-components.com/): One of the nicest CSS-in-JS solutions for styling your app.
- [Yup](https://github.com/jquense/yup): Nice schema validator that integrates smoothly with formik. Has an easy way to declare validation error messages, so it's used for the form validations.
- [Zod](https://github.com/colinhacks/zod): A typesafe schema validation, pretty much like Yup, but with better type inference. Used with tRPC to infer and validate the route inputs.

Other tools worth mentioning are [Lodash](https://lodash.com/), [Polished](https://polished.js.org/), [Radix UI](https://www.radix-ui.com/), [React Icons](https://react-icons.github.io/react-icons/) and [React Toastify](https://fkhadra.github.io/react-toastify/introduction).

## Architecture

The app's architecture uses conecepts from Uncle Bob's Clean Architecture to implement separation of concerns within layers and componentes.

The domain layer defined all the entities of our domain and the interactions between them, the use cases. It also define the contracts (interfaces) for services the domain will use to perform and persist these interactions, such as repositories for data management and dtos for input.

The infra layer implements the domain's interfaces, and setup the app routes and database connections.

The presentation layer contains our React components and structure. These are the components that are rendered to the user. It is also loosely decoupled from next itself, except by some of it's components (like Image or Router).

## Running locally

If you want to run this app locally, just take the following steps.

Use `npm install` or `yarn` to install the dependencies. I prefer using yarn, so we'll go with that. The post-install script should handle the database setup and migrations, but if it doesn't, run `yarn prisma generate` and `yarn prisma migrate dev` to set the database up.

Run the app with `yarn dev`. That's pretty much it.
