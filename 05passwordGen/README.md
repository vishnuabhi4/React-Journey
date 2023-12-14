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

* 