var React = require('react');
var View  = require('./view.js');
var Model = require ('./model.js');

React.render(
  <View products={Model.PRODUCTS} />,
  document.getElementById('content')
);
