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
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400" />
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }

}
