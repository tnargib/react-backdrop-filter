import React, { Component } from "react";
import PropTypes from "prop-types";
import html2canvas from "html2canvas";
import ResizeObserver from "resize-observer-polyfill";

import "./BackdropFilter.css";

class BackdropFilter extends Component {
  lastDraw = 0;
  id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  backdrop = React.createRef();

  componentDidMount() {
    new ResizeObserver(() => {
      this._draw();
    }).observe(this.backdrop.current);

    window.onresize = this._draw;
  }

  componentDidUpdate() {
    this._draw();
  }

  _draw = () => {
    let element = this.backdrop.current;
    let boundings = element.getBoundingClientRect();
    let beginDraw = new Date().getTime();
    
    html2canvas(document.body, {
      width: boundings.width,
      height: boundings.height,
      x: boundings.x,
      y: boundings.y,
      ignoreElements: el => el.dataset.backdropId === this.id,
    }).then(canvas => {
      if (this.lastDraw > beginDraw) return;
      this.lastDraw = beginDraw;
      
      element.querySelector(".rct-backdrop-canvas").innerHTML = "";
      element.querySelector(".rct-backdrop-canvas").appendChild(canvas);
      element.querySelector(
        ".rct-backdrop-canvas",
      ).style.filter = this.props.filter;
    });
  };

  render() {
    return (
      <div
        data-backdrop-id={this.id}
        className={"rct-backdrop-wrapper " + this.props.className}
        ref={this.backdrop}
      >
        <div className="rct-backdrop-canvas" />
        {this.props.children}
      </div>
    );
  }
}

BackdropFilter.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.string,
};

BackdropFilter.defaultProps = {
  className: "",
  filter: "",
};

export default BackdropFilter;
