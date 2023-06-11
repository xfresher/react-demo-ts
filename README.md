# Setup

```sh
npx storybook@latest init
```

# Components

## Input

```html
<input
  type="text"
  id=""
  name=""
  value=""
  size=""
  max="number | date"
  min="number | date"
  maxlength="number"
  minlength="number"
  autocomplete="on | off"
  autofocus="autofocus"
  disabled="disabled"
  dirname="inputname.dir"
  form="form_id"
  formaction="URL"
  formnovalidate="formnovalidate"
/>
<input type="checkbox" checked="checked" />
<input type="radio" checked="checked" />
<input type="file" multiple="multiple" accept="file_extension | audio/* | video/* | image/* | media_type" />
<input
  type="image"
  src=""
  alt=""
  width=""
  height=""
  formenctype="application/x-www-form-urlencoded | multipart/form-data | text/plain"
  formmethod="get | post"
  formtarget="_blank | _self | _parent | _top | framename"
/>
<input
  type="submit"
  id="" name=""
  formenctype="application/x-www-form-urlencoded | multipart/form-data | text/plain"
  formmethod="get | post"
  formtarget="_blank | _self | _parent | _top | framename"
/>

<textarea
  id=""
  name=""
  rows="4"
  cols="50"
  maxlength="200"
  placeholder=""
  autofocus="autofocus"
  disabled="disabled"
  readonly="readonly"
  required="required"
  wrap="hard|soft"
  dirname="textareaname.dir"
  form="form_id"
>
  Content in here...
</textarea>

type?:
  'text' | 'number' | 'hidden' | 'checkbox' | 'radio' | 'password' | 'file' | 'image' | 'reset'
  'button' | 'submit'
  'email' | 'tel' | 'url' | 'color' | 'date' | 'range'
  'time' | 'search' | 'datetime-local' | 'month' | 'week'
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
