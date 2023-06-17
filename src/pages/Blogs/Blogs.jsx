import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blogs = () => {
  return (
    <div className="container mx-auto min-h-full my-10 px-6 md:px-0">
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-orange-600 font-bold">#Blogs</h3>

        <Pdf targetRef={ref} filename="blogs.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn btn-md px-6 bg-orange-600 text-white border-0 hover:bg-orange-700"
            >
              Make it Pdf
            </button>
          )}
        </Pdf>
      </div>
      {/* first question */}
      <div ref={ref}>
        <div className="mt-3">
          <b className="text-orange-600">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </b>
          <div className="text-gray-500">
            <p className="mt-3 mb-1">
              {`Answer: "Uncontrolled components" and "Controlled components" are often used
          to describe different approaches for handling user input in user
          interfaces.`}
            </p>
            <h4>1. Uncontrolled Components:</h4>
            <ul className="list-disc list-inside ml-5 mb-3">
              <li>
                The form data is managed by the DOM rather than the component
                itself.
              </li>
              <li>
                Input elements, such as input or textarea, hold their own state
                and manage their own data.
              </li>
              <li>
                To retrieve the current value from an uncontrolled component,
                need to query the DOM using JavaScript methods.
              </li>
              <li>
                {`Uncontrolled components are typically easier to implement as you
            don't need to write as much code to manage the form state.`}
              </li>
            </ul>
            <h4>2. Controlled Components:</h4>
            <ul className="list-disc list-inside ml-5">
              <li>
                Controlled components, on the other hand, have their form data
                controlled by the component itself.
              </li>
              <li>
                The component maintains the state of the form data and handles
                any changes or updates to it.
              </li>
              <li>
                Input elements in controlled components receive their values via
                props and trigger events, such as onChange, to notify the
                component of any changes.
              </li>
              <li>
                The component can then handle these events, update its state,
                and re-render the user interface accordingly.
              </li>
            </ul>
          </div>
        </div>

        {/* second question */}
        <div className="mt-10">
          <b className="text-orange-600">
            2. How to validate React props using PropTypes?
          </b>
          <div className="text-gray-500 mt-3">
            <p>
              Answer: Using the PropTypes library to validate the props passed
              to a component.
            </p>
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>
                Install PropTypes: need to install the prop-types package.
              </li>
              <li>
                Import PropTypes: In the component file where we want to
                validate props, import the PropTypes library
              </li>
              <li>
                Define propTypes: define the propTypes object to specify the
                expected types and other validations for each prop. We can do
                this by adding a static propTypes property to our component
                class
              </li>
              <li>
                Check prop types: During development, React will check the
                defined propTypes against the props passed to the component, and
                it will display warnings in the console if there are any
                mismatches or missing props. This helps catch potential issues
                and ensures that the component receives the correct props.
              </li>
            </ul>
          </div>
        </div>

        {/* third question   */}
        <div className="mt-10">
          <b className="text-orange-600">
            3. Tell us the difference between nodejs and express js.
          </b>
          <div className="text-gray-500 mt-3">
            <p>
              {`
                Answer: Node.js and Express.js are both popular frameworks used in
            JavaScript-based server-side development, but they serve different
            purposes. Let's explore the differences between Node.js and
            Express.js:`}
            </p>
            <p>Node js:</p>
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>
                Node.js is a runtime environment that allows you to run
                JavaScript on the server-side.
              </li>
              <li>
                It provides an event-driven, non-blocking I/O model, which makes
                it efficient and scalable for building server applications.
              </li>
              <li>
                Node.js has a vast ecosystem of libraries and modules available
                through npm, which allows developers to easily integrate
                existing solutions into their applications.
              </li>
              <li>
                It provides core functionality for building server applications,
                such as file system operations, networking, and low-level HTTP
                handling.
              </li>
            </ul>
            <p className="mt-3">Express.js:</p>
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>
                Express.js is a web application framework built on top of
                Node.js. It provides a higher level of abstraction for building
                web applications and APIs.
              </li>
              <li>
                Express.js simplifies the process of defining routes, handling
                requests and responses, and managing middleware.
              </li>
              <li>
                It offers a minimalist and unopinionated approach, allowing
                developers to have more control over the architecture and design
                of their applications.
              </li>
              <li>
                Express.js provides a modular structure that enables developers
                to easily add or remove functionality using middleware
                components.
              </li>
              <li>
                It offers features like routing, template engines for
                server-side rendering, and support for various HTTP methods and
                middleware plugins.
              </li>
            </ul>
          </div>
        </div>

        {/* fourth question */}
        <div className="mt-10 text-gray-500">
          <b className="text-orange-600">
            4. What is a custom hook, and why will you create a custom hook?
          </b>
          <div className="mt-3">
            <p>
              {`A custom hook is a JavaScript function that starts with the prefix
            "use" and allows you to reuse stateful logic across multiple
            components. Custom hooks enable you to extract and share common
            functionality, making it easier to manage and reuse complex logic in
            your React applications.`}
            </p>
            <p className="mt-3">
              Here are a few reasons why you might create a custom hook:
            </p>
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>
                Reusability: If you find yourself using the same code or logic
                in multiple components, you can create a custom hook to
                encapsulate that logic. This promotes code reusability and
                reduces duplication across your codebase.
              </li>
              <li>
                Abstraction: Custom hooks allow you to abstract away complex
                logic and provide a simplified interface for using that logic.
                This makes your component code cleaner and easier to understand
                by hiding the implementation details behind the custom hook.
              </li>
              <li>
                Encapsulation of Stateful Logic: Hooks, including custom hooks,
                enable you to encapsulate and manage stateful logic within
                functional components. Custom hooks can handle state management,
                side effects, event listeners, API calls, and more, allowing you
                to keep your component code focused on rendering and
                presentation concerns.
              </li>
              <li>
                Shareable Logic: Custom hooks can be shared across different
                projects or within a team, promoting code sharing and
                consistency. You can package your custom hooks as reusable
                modules and publish them as npm packages, making them available
                for others to utilize in their React applications.
              </li>
              <li>
                {`Testing: Custom hooks can improve the testability of your code. By
              extracting complex logic into a custom hook, you can write focused
              tests for the hook's functionality independently of the
              component's rendering and UI concerns. This allows for more
              effective testing and easier maintenance of your codebase.`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
