# React Backdrop Filter

React Backdrop Filter is a quick and easy way to add nice backdrop filters to your app.

[![npm](https://img.shields.io/npm/v/react-backdrop-filter.svg)](https://www.npmjs.com/package/react-backdrop-filter)
[![npm](https://img.shields.io/david/tnargib/react-backdrop-filter.svg)](https://img.shields.io/david/tnargib/react-backdrop-filter)
[![npm](https://img.shields.io/npm/l/react-backdrop-filter.svg)](https://img.shields.io/npm/l/react-backdrop-filter)

![example](./example.png)

## Important note

If the css backdrop filter property is not supported by your navigator, the component will fallback to html2canvas by default. To disable this behaviour, remember to set the prop `canvasFallback` to false.

When using the fallback, the component uses [html2canvas](https://html2canvas.hertzen.com/). Canvas are slow to calculate and render so it won't do well with animations and movement in the page. It is more recommended to use with static elements or to disable the fallback and [add a different background on non supported navigator](#Example-of-adding-a-different-background-on-non-supported-navigators).

## Installation

```bash
# Yarn
yarn add react-backdrop-filter

# NPM
npm install react-backdrop-filter
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
                canvasFallback={true}
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
| canvasFallback  | function, boolean | NO        | true          | Set it to false if you don't want the component to fallback on html2canvas                                  |
| shouldDraw      | function, boolean | NO        | true          | Called every time the canvas is about to rerender. Should return true or false if it should continue or not |
| onDraw          | function          | NO        | null          | Function called when canvas is rendered                                                                     |
| html2canvasOpts | object            | NO        | {}            | [html2canvas configuration options](http://html2canvas.hertzen.com/configuration)                           |
| logging         | boolean           | NO        | true          | Display or not the logs from react-backdrop-filter and html2canvas                                          |

## Example of adding a different background on non supported navigators

```css
@supports not (
  (backdrop-filter: blur(5px)) and (-webkit-backdrop-filter: blur(5px))
) {
  .bluredForm {
    background: rgba(255, 255, 255, 0.3);
  }
}
```
