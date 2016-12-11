import React, { Component } from 'react';

export default class MainLayout extends Component {

  render() {
    const { children } = this.props;

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
          <title>Tyler Brown</title>
          <link href="https://fonts.googleapis.com/css?family=Nunito|Open+Sans|Quicksand|Source+Sans+Pro" rel="stylesheet" />
          <link rel="stylesheet" href="main-dev.css" />
          <script src="https://use.fontawesome.com/f408e0d2cb.js" />
        </head>
        <body>
          {children}
          <script src="main-dev.js" />
        </body>
      </html>
    );
  }

}
