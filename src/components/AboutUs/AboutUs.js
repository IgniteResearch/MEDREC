import React from 'react';

var __html = require('./index.html.js');
var template = { __html: __html };

const ChangeLog = () => {
  return (<div><span dangerouslySetInnerHTML={template} /></div>);
};

export default ChangeLog;