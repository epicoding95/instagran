import React from 'react';
import { Link } from 'react-router-dom';

function TextContent() {
  var TextContentStyles = {
    width: "570px",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#ebe6e0",
    padding: "15px",
    fontFamily: "sans-serif"
  }

  return (
    <div style={TextContentStyles}>
      <b>jschneidereit</b> You've never heard of the Millennium Falcon?
    </div>
  );
}

export default TextContent;