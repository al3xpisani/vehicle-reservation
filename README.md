<img src="public/logo.svg" alt="Workoast Logo" width="64" style="background: #666; padding: 0.25rem; border-radius: 100%; margin-bottom: 1rem;" />

# Welcome!

Welcome to Workoast's take-home project! This project is a facsimile for a rental car reservation system, and you will build a few new features in the system. Before we get started, we'd like you to take some time to explore the project and understand the codebase.

## Getting started

To get started, follow these steps:

1. Install dependencies with `npm install`
2. Create and seed the database with `npm run db:init`
3. Start the development server with `npm run dev`

### Additional commands

- `npm run db:reset` to reset the database to the initial state
- `npm run db:seed` to seed the database
- `npm run db:studio` to open the Prisma Studio
- `npm run lint` to run ESLint
- `npm run lint:fix` to run ESLint and fix errors

While the development server is running, you can also access documentation for the API at http://localhost:5173/trpc/panel.

## Project structure

- `app/` contains the front-end code
- `server/` contains the back-end code
- `prisma/` contains the database, schema, and migrations

### Relevant libraries

There are a few libraries that are already included in the project. These links are for reference, but you are free to use any libraries you want.

**Front-end**
- [React Router](https://reactrouter.com/en/main) for routing
- [tRPC (React Query)](https://trpc.io/docs/client/react) for API calls
- [React Hook Form](https://react-hook-form.com/) for form handling
- [Tailwind](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) for UI components - the entire catalog of components is available in `app/components/ui`
- [Vite](https://vite.dev/) as the build tool

**Back-end**
- [tRPC](https://trpc.io/) as the API framework
- [Prisma](https://www.prisma.io/) as the database ORM
- [SQLite](https://www.sqlite.org/) as the database

## Project requirements

Out of the box, this project allows users to find and reserve vehicles available for a given time range. You will extend the project by adding additional filters to the search page as well as adding detailed vehicle listings.

Please use your best judgement for product decisions while building your new features. Consider mobile-first design, accessibility, and general best practices while you work. Feel free to make any UI changes you think are appropriate for a quality finished product.

Here are the project requirements:

### **Additional filters**

> As a user, I want to filter the available vehicles by additional criteria such as the hourly rate, maximum number of passengers, vehicle classification, and vehicle make so that I can quickly find the best vehicle for my needs.

> As a user I would like the ability to reset the filters to the default values.

Before you start, take a look at the `vehicles.search` and `vehicles.options` procedures in the API. These will be your starting points for the additional filters. `vehicles.options` returns a list of makes, classifications, and features that you can use to populate some of the filters. `vehicles.search` includes parameters for each of the filters you can add.

Here are the filters you should add:

- Hourly price range (e.g. $10 - $100)
- Minimum passenger count (e.g. 2, 4, 6, etc.)
- Vehicle class (e.g. basic, standard, SUV, luxury, etc.)
- Vehicle make (Toyota, Honda, etc.)

### **Detailed vehicle listings**

> As a user, I want to see a thumbnail of the vehicle as well as more information about it such as the number of passengers it seats, the model year, and the vehicle classification so that I can make an informed decision.

We would like to see details like the following:

- Vehicle thumbnail
- Vehicle make and model (e.g. Toyota Camry)
- Hourly price (e.g. $50/hr)
- Maximum passenger capacity (e.g. 5)
- Call-to-action button (e.g. "Reserve now")

### Writeup

Once you're finished, please write a short summary of the changes you made and the reasoning behind them in the `SUBMISSION.md` file.

We would like to understand your process and get a sense of your approach. It's helpful to call out the decisions and trade-offs that you navigated!

## Expectations

We expect this project to take around 4-6 hours to complete. If you find yourself spending more time than that, please reach out to us and let us know. We want to make sure that the project is a good fit for you and that we are respecting your time.

We are looking for a few key things in your submission:

- **Quality of work**: We want to see clean, well-organized code that is easy to read and understand.
- **Product decisions**: We want to see that you can make good product decisions and that you can communicate the reasoning behind them.
- **Attention to detail**: We want to see that you can build a polished product that is accessible and user-friendly.
- **Communication**: We want to see that you can communicate your process and decisions effectively.
- **Scope**: We want to see that you can manage your time and scope effectively to accomplish the requirements.

If you have any questions or need clarification on the requirements, please reach out to us. We're here to help!

## When you're finished

Once you've completed the project requirements (congrats by the way!), please create an archive of the project by running `npm pack` and rename the archive to include your name before sending it to us.

We hope you enjoy working on this project!
