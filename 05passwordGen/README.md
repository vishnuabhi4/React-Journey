# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# DOCS
* useState: This is a React Hook used for adding state variables to functional components. It allows you to declare state variables and manage their updates within a functional component.

* useCallback: Another React Hook used for optimizing performance. It caches a function instance, returning a memoized version of the function that only changes if one of its dependencies has changed. This is useful when you want to prevent unnecessary re-creations of functions, especially in scenarios where functions are dependencies for other hooks or components.
```
const memoizedFunction = useCallback(
  () => {
    // Function logic here
  },
  [dependencies]
);

```

* useEffect: This Hook is used to perform side effects in functional components. Side effects might include data fetching, subscriptions, manual DOM manipulations, and more. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.

* useRef: This Hook provides a way to keep mutable variables that persist through component re-renders without causing a re-render when the variable changes. It's often used to access or store a reference to a DOM element or to keep track of values that persist between renders without causing a re-render.

* `const passwordRef = useRef(null);` useRef: This is a React Hook used to create a mutable reference that persists across renders without causing a re-render when the reference changes. It returns a ref object.

* `const passwordRef = useRef(null);`
* useRef is a React hook that creates a mutable object referred to as a "ref."
* It's commonly used to access and interact with DOM elements or to persist values across component renders without causing a re-render.
* The useRef hook returns an object with a current property.
* In this case, passwordRef is initialized with a value of null.
* Usage:
After assigning passwordRef to a DOM element using the ref attribute in JSX, you can access and manipulate that DOM element using the passwordRef.current property.
It's often used to access input values, focus on elements, or store references to DOM elements within functional components.
For instance, if passwordRef was assigned to an input element, you could access its current value via passwordRef.current.value.
### ref
* After assigning passwordRef to a DOM element using the ref attribute in JSX, you can access and manipulate that DOM element using the passwordRef.current property.
* For instance, if passwordRef was assigned to an input element, you could access its current value via passwordRef.current.value.
```
import React, { useRef } from 'react';

function MyComponent() {
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    // Accessing the input value using passwordRef.current.value
    const passwordValue = passwordRef.current.value;
    console.log('Password:', passwordValue);
  };

  return (
    <div>
      <input type="password" ref={passwordRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

```

# Syntax Referrance 
* `const passwordGenerator = useCallback(() => { ... }, [dependencies]);` :
What is useCallback?
* A React hook that memoizes a callback function, meaning it remembers the previously returned result and only re-creates the function if its dependencies change.
Optimizes performance by preventing unnecessary re-renders of child components that rely on the memoized function.


# Dependencies
* To optimize performance and prevent unnecessary re-runs of the password generator function.
* To ensure the generated password always reflects the latest values of these variables.
* `Think of it like this:` The password generator is a chef who needs certain ingredients (dependencies) to create a password dish.
If any of the ingredients change, the chef needs to be notified to make a new dish that incorporates the new flavors.
* Without these dependencies:
The chef might make the same password over and over, even if preferences or length have changed, leading to stale or incorrect passwords.
The React kitchen might waste time and resources by re-running the password generator even when nothing essential has changed.


