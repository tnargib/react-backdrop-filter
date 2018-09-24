# React Backdrop Filter

React Backdrop Filter is a quick and easy way of getting experimental backdrop filter to work with canvas.

![example](./example.png)

# Installation

1. Install React Backdrop Filter as a dependency

```
# Yarn
$ yarn add react-backdrop-filter

# NPM
$ npm install react-backdrop-filter
```

2. Import the `react-backdrop-filter` module

```
// ES6
import BackdropFilter from "react-backdrop-filter";
// ES5
var BackdropFilter = require("react-backdrop-filter");
```

# Example

```javascript
import BackdropFilter from "react-backdrop-filter";

render() {
    return (
        <div className="container">
            <BackdropFilter
                className="bluredForm"
                filter={"blur(8px) brightness(110%)"}
            >
                <form>
                    <h4>@tnargib</h4>
                    <p>Login</p>
                    <hr />
                    <p>Password</p>
                    <hr />
                    <div className="button">Sign in</div>
                    <small>Forgot password ?</small>
                </form>
            </BackdropFilter>
        </div>
    );
}
```

[![Edit 13zvn71zz3](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/13zvn71zz3)

# Props

| prop name  | type     | mandatory | default value | description                                                                                                 |
| ---------- | -------- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| filter     | string   | NO        | ""            |                                                                                                             |
| className  | string   | NO        | ""            |                                                                                                             |
| logging    | bool     | NO        | false         | html2canvas configuration option                                                                            |
| useCORS    | boolean  | NO        | false         | html2canvas configuration option                                                                            |
| proxy      | string   | NO        | null          | html2canvas configuration option                                                                            |
| shouldDraw | function | NO        | null          | Called every time the canvas is about to rerender. Should return true or false if it should continue or not |
| onDraw     | function | NO        | null          | Function called when canvas is rendered                                                                     |

# Known Issues

> This package uses [html2canvas](https://html2canvas.hertzen.com/) under the hood. Canvas are slow to calculate and render so `react-backdrop-filter` can't do well with animations and movement in the page. It is more recommended to use with static elements.
