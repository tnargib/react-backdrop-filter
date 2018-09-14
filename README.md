# React Backdrop Filter

react backdrop filter is an easy way of getting experimental backdrop filter to work with canvas.

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

| prop name | type   | mandatory | default value |
| --------- | ------ | --------- | ------------- |
| filter    | string | NO        | ""            |
| className | string | NO        | ""            |
