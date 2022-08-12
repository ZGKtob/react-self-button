import React from 'react';
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";

var Button = function Button(props) {
  var _props$style = props.style,
      style = _props$style === void 0 ? {
    background: 'red'
  } : _props$style,
      _props$text = props.text,
      text = _props$text === void 0 ? /*#__PURE__*/_jsx("span", {
    children: "\u8FD9\u662F\u4E00\u4E2Abutton\u6309\u94AE"
  }) : _props$text,
      onClick = props.onClick;
  return /*#__PURE__*/_jsx("div", {
    style: style,
    className: "self-button",
    onClick: onClick,
    children: text
  });
};

export default Button;