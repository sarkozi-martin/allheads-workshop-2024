# Frontend Example Application README
## 1. Introduction
Welcome to our frontend example application! In this README, we'll provide an overview of our application's architecture, technologies, and design principles.

### 2. Technologies Used
Our application is built using Vue.js and TypeScript, two powerful technologies for building modern and scalable web applications.

### 3. Application Overview
We've developed a headless frontend application that interacts with a backend (BE) system. The backend sends tasks to the frontend, which the user then works on. Once completed, the frontend responds to the backend indicating task completion. This cycle continues until all tasks are completed. This architecture enables seamless communication and task management between the frontend and backend systems.

### 3.1. File Structure
Our project follows a structured file organization within the src directory:

#### components
This folder contains local Vue components specific to our frontend application. These components are built using the George library as foundational building blocks. They encapsulate reusable complex elements and functionality.

#### views
The views directory contains local Vue components that serve as pages within Vue Router. These components represent different views or pages of our application and also utilize the George library components for consistency and reusability.

#### library
Within the library folder resides the George library components, modules, and styles. These assets are designed to be reusable across various frontend applications. The components and modules encapsulate common functionalities and UI patterns, promoting consistency and efficiency in development.

It's important to note that the library folder is not present within individual frontend applications. Instead, it is installed as a regular package via npm. This setup allows for easy integration and usage of the George library across different projects.

### 3.2. Internal George Library Components
Our frontend application leverages our internal George library components and modules. These components provide a standardized and consistent user interface, ensuring a cohesive user experience across our applications.

### 3.3. Abstraction Over 3rd Party Libraries
In our George library, we prioritize abstraction over direct dependency on third-party libraries. By abstracting away dependencies, we shield our frontend applications from the impact of changes in third-party libraries. This approach ensures greater flexibility and maintainability in our codebase.

### 3.4. Composability
We embrace the concept of composability to create modular and reusable code. By creating small composites that can be later on used to construct larger modules, we efficiently control different aspects of our application. This approach promotes code reusability and maintainability, allowing us to build scalable and adaptable solutions.

### 3.5. Modularization
Our frontend application is structured using encapsulated modules created using factory functions. These modules encapsulate related functionalities, returning a set of functions and properties that can be used across our application. This approach offers flexibility similar to classes but with the benefits of functional programming.

### 3.6. Styling and Theming
When styling and theming our application, we define CSS classes using JavaScript, enabling reactivity. This dynamic approach to styling allows us to create responsive and visually appealing user interfaces while maintaining flexibility and scalability.

## 4. Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
