import React, { Component } from 'react';

import MainLayout from '../main';

export default class HomePage extends Component {

  render() {
  	const { isAdmin } = this.props;

    return (
      <MainLayout>
        <h1>Tyler Brown</h1>
        <h3>Is Admin: {`${isAdmin}`}</h3>
      </MainLayout>
    );
  }

}
