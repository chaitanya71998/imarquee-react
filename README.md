# React Marquee Text Display

This application allows users to input text and display it as a fullscreen marquee. It's a simple demonstration of using the `react-easy-marquee` component with React and Vite.

## Features

*   **Text Input:** Allows users to enter custom text.
*   **Toggle Marquee:** Show or hide the text as a fullscreen marquee.
*   **Marquee Display:**
    *   Displays the user-provided text.
    *   Fixed background color (`#fafafa`).
    *   Fixed height (`250px`).
    *   Reversed animation direction.
*   **Reset Text:** Clears the current text from the input field.

## Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **`react-easy-marquee`:** A React component for creating scrolling marquee effects.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **CSS:** Used for styling the application.

## Setup and Usage

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    *(Replace `<repository-url>` with the actual URL of this repository and `<repository-directory>` with the name of the cloned folder.)*

2.  **Install dependencies:**
    This project uses PNPM as the package manager.
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    pnpm build
    ```
    This command compiles the TypeScript code and bundles the application for production into the `dist` folder (though `package.json` specifies `build` folder for `gh-pages`).

## Deployment

This project is configured for deployment to GitHub Pages using the `gh-pages` package.

The live deployment can be accessed at: [https://chaitanya71998.github.io/imarquee-react/](https://chaitanya71998.github.io/imarquee-react/)

To deploy the application yourself:
1.  Ensure your repository is correctly set up on GitHub.
2.  Run the deployment script:
    ```bash
    pnpm run deploy 
    ```
    This script typically runs `pnpm run build` first (as per `predeploy` script in `package.json`) and then deploys the contents of the `build` directory.
