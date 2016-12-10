import React, { Component } from 'react';

export default class MainLayout extends Component {

  render() {
    const { igUser, children } = this.props;

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
          <title>Tyler Brown</title>
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400" />
          <link rel="stylesheet" href="main-dev.css" />
        </head>
        <body>
          {igUser
            ? <a href="/logout">logout</a>
            : <a href="/login">login</a>
          }
          {children}
          <script src="main-dev.js" />
        </body>
      </html>
    );
  }

}
