<div align="center">
  <h1> React class: React Project Folder Structure</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/juadebade/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Juadeb1">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Juadeb1?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/juadebade/" target="_blank">Juadeb Gabriel</a><br>
<small> October, 2020</small>
</sub>

</div>

- [React Project Folder Structure and File Naming](#react-project-folder-structure-and-file-naming)
  - [File Naming](#file-naming)
  - [Folder](#folder)
  - [Components Folder](#components-folder)
  - [Fragments](#fragments)

# React Project Folder Structure and File Naming

There is no strict way to use a single folder structure or file naming in React project. Most of the time, these kind of choice can be made by a team. Sometimes a company may have a developed guidelines about what code conventions to follow, folder structure and file naming. There is no right or wrong way of structuring a React project but some structures are better than the others for scalability,maintainability, ease of working on files and easy to understand structure. If you like to learn further about folder structure you may check the following articles.

- [React Folder Structure by www.robinwieruch.de](https://www.robinwieruch.de/react-folder-structure)

I use a mix of different conventions. If you like you can follow it but please stick to a structure which you think makes sense for you.

## File Naming

In all my React project, I will use CamelCase file name for all components. I prefer to use descriptive long name.

## Folder

I found it easy to put all images, icons and fonts in the assets folder and all CSS style sheets in styles folder. All components will be in the components folder.

So far, we have been working on index.js file. We have lots of component on index.js. Today we will move every component to a single file and we will import all the files to App.js. In the process, you will see my folder structure. Currently, we are at src directory. All the folder structure will be inside the src directory. Let's start from the index.js file. In addition to index.js file, let's create an App.js file and move most of the components we had to App.js for the time being.
The index.js is your getaway to connect the component with index.html.

## Components Folder

Inside the src directory will pull all the components

```sh
src
  App.js
  index.js
  components
   -auth
    -Signup.js
    -Signin.js
    -Forgotpassword.js
    -Resetpassord.js
  header
   -Header.js
  footer
   -Footer.js
  assets
   -images
   -icnons
   - fonts
  styles
   -button.js
   -button.scss
 utils
  -random-id.js
  -display-time.js
  -generate-color.js
 shared
  -Button.js
  -InputField.js
  -TextAreaField.js
```

## Fragments

Fragments are a way to avoid unnecessary parent element in JSX. Let's implement a fragment. We import fragment from react module. As you can see below, we imported React and fragment together by use a comma separation.

```js
import React, { Fragment } from "react";

const Skills = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </Fragment>
  );
};
const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  );
};
```

It is also possible to just extract the fragment module from React as shown below.

```js
import React from "react";

const Skills = () => {
  return (
    <React.Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </React.Fragment>
  );
};

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  );
};
```

In latest version of Reacts it also possible to write without extracting or importing using this signs(<> </>)

```js
import React from "react";

// Recommended
const Skills = () => {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </>
  );
};

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  );
};
```
