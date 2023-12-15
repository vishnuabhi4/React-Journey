# Welcome to "My React Learning Journey" repository! 🚀
### Docs
* React is a JavaScript library for building user interfaces, while ViteReact refers to using React as the framework within the Vite development environment. Vite is an excellent choice for React development due to its speed and developer-friendly features, making it a popular combination for modern web application development.
* `export default FunctionName`  exports the Journey component as the default export of this module. It allows you to import and use the `FunctonName` component in other parts of your application as the default export.
* `function FunctonName() { ... }`: This code defines the FunctonName component as a functional component. It's a basic React component that returns JSX (JavaScript XML), which represents the UI for your component.
* The `rootElement` in a React application can be visualized as the entry point or container in your HTML document where your entire React application will be rendered. It's like the soil in which you plant your React tree, allowing it to grow and expand throughout your web page.
* , the `<> and </>` are shorthand for <React.Fragment> and </React.Fragment>, respectively. They create a virtual wrapper that doesn't produce any extra DOM elements in the final output. `Visualization:`
Think of fragments as invisible containers. They serve as a temporary grouping mechanism during the rendering process without affecting the HTML structure you're rendering to the browser.
* `use :` 
`1.` Avoiding the need to create extra DOM elements, which can improve performance.
`2.` Making code more readable and concise.
`3.` Creating conditional rendering logic that is more flexible and easier to maintain.
## State
 a "state" refers to an internal data management system within a component. It represents the dynamic information that a component can maintain and use to render itself. State allows React components to create interactive and responsive user interfaces by holding and managing changing data.
 ### reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
## What is the difference between state and props?
* props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

## Hooks
* 
Certainly! The useCallback hook in React is used to memoize a function, returning a memoized version of that function. Here's the syntax:
```
const memoizedCallback = useCallback(
  () => {
    // Function logic here
  },
  [dependencies]
);

```

#### Class components and Function components
* Class Components:
Class components are traditional React components defined using ES6 classes. They extend from the base React.Component class and can have state, lifecycle methods, and more complex functionalities.
```
class MyClassComponent extends Component {
    //code...
}
```
* Function components
Function components are simpler and more lightweight components defined as JavaScript functions. They don't have their own state or lifecycle methods (until the introduction of hooks). They typically receive props and return the JSX to render.