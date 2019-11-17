import React, { Component } from "react";
import PropTypes from "prop-types";
import html2canvas from "html2canvas";
import ResizeObserver from "resize-observer-polyfill";

import "./BackdropFilter.css";

class BackdropFilter extends Component {
  cssSupport = CSS.supports(
    "(backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px))"
  );

  backdrop = React.createRef();

  get isUsingCanvas() {
    return !this.cssSupport && !!this.canvasFallback();
  }

  componentDidMount() {
    this.log(
      `CSS backdrop-filter is ${this.cssSupport ? "" : "not "}supported`
    );

    if (this.isUsingCanvas) {
      let element = this.backdrop.current;

      if (element) {
        new ResizeObserver(() => {
          this._draw();
        }).observe(element);
      }

      window.onresize = this._draw;
    }
  }

  componentDidUpdate() {
    if (this.isUsingCanvas) this._draw();
  }

  log = (...args) => {
    if (this.props.logging) console.log(...args);
  };

  shouldDraw = () => {
    const { shouldDraw } = this.props;
    if (typeof shouldDraw === "function") return shouldDraw();
    return shouldDraw;
  };
  canvasFallback = () => {
    const { canvasFallback } = this.props;
    if (typeof canvasFallback === "function") return canvasFallback();
    return canvasFallback;
  };

  _draw = () => {
    if (!this.shouldDraw()) return;

    const element = this.backdrop.current;
    if (!element) return;

    const { width, height, x, y } = element.getBoundingClientRect();
    const canvas = element.querySelector(".rct-backdrop-filter-canvas");

    // Wrap in setTimeout or first canvas won't render in Firefox
    setTimeout(() =>
      html2canvas(document.body, {
        ...this.props.html2canvasOpts,
        logging: this.props.logging,
        width,
        height,
        x,
        y,
        canvas
      }).then(() => {
        if (typeof this.props.onDraw === "function") this.props.onDraw();
      })
    );
  };

  render() {
    const { className, children } = this.props;

    const wrapperStyles = {
      backdropFilter: this.props.filter,
      WebkitBackdropFilter: this.props.filter
    };
    const canvasStyles = {
      filter: this.props.filter
    };

    return (
      <div
        data-html2canvas-ignore
        ref={this.backdrop}
        className={"rct-backdrop-filter-wrapper " + className}
        style={this.cssSupport ? wrapperStyles : null}
      >
        {!this.cssSupport && (
          <canvas className="rct-backdrop-filter-canvas" style={canvasStyles} />
        )}
        {children}
      </div>
    );
  }
}

BackdropFilter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  filter: PropTypes.string,
  canvasFallback: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  shouldDraw: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onDraw: PropTypes.func,
  html2canvasOpts: PropTypes.object,
  logging: PropTypes.bool
};

BackdropFilter.defaultProps = {
  className: "",
  filter: "",
  canvasFallback: true,
  shouldDraw: true,
  html2canvasOpts: {},
  logging: true
};

export default BackdropFilter;
