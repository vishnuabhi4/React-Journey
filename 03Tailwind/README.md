### Debugging your Tailwind project
* Confirm that you’ve installed Autoprefixer and postCSS alongside Tailwind.

Installing Tailwindcss without these two will ultimately prevent your utility classes from being recognised. Autoprefixer is a plugin that generates vendor prefixes and injects them into your CSS properties so you don’t have to do it manually. PostCSS, on the other hand, handles CSS transformations, adds vendor prefixes using the Autoprefixer plugin, ensures cross-browser compatibility etc. Both of them used together in your project significantly reduces your development time. Here’s how to add it to your project if you skipped it.

Install alongside tailwind `npm install -D tailwindcss postcss autoprefixer`

