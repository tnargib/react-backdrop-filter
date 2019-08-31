# React Backdrop Filter

React Backdrop Filter is a quick and easy way of getting experimental backdrop filter to work with canvas.

![example](./example.png)

## Important note

This package uses [html2canvas](https://html2canvas.hertzen.com/) under the hood. Canvas are slow to calculate and render so `react-backdrop-filter` can't do well with animations and movement in the page. It is more recommended to use with static elements.

## Installation

```bash
# Yarn
$ yarn add react-backdrop-filter

# NPM
$ npm install react-backdrop-filter
```

## Usage

```javascript
import BackdropFilter from "react-backdrop-filter";

render() {
    return (
        <div className="container">
            <BackdropFilter
                className="bluredForm"
                filter={"blur(10px) sepia(50%)"}
                html2canvasOpts={{
                    allowTaint: true
                }}
                onDraw={() => {
                    console.log("Rendered !");
                }}
                >
                <form>
                    <div className="profilePic">
                    <img src={drwho} alt="me" />
                    </div>
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

## Configuration

| prop name       | type              | mandatory | default value | description                                                                                                 |
| --------------- | ----------------- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| filter          | string            | NO        | ""            |                                                                                                             |
| className       | string            | NO        | ""            |                                                                                                             |
| shouldDraw      | function, boolean | NO        | true          | Called every time the canvas is about to rerender. Should return true or false if it should continue or not |
| onDraw          | function          | NO        | null          | Function called when canvas is rendered                                                                     |
| html2canvasOpts | object            | NO        | {}            | [html2canvas configuration options](http://html2canvas.hertzen.com/configuration)                           |
