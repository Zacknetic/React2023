import React from 'react';

export default function MyParagraph(props) {
  console.log('MY PARAGRAPH RUNNING'); // This will run every time the component is re-evaluated

  return /*#__PURE__*/React.createElement("p", null, props.children);
}