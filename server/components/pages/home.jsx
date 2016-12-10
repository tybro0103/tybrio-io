import React, { Component } from 'react';
import _ from 'lodash';

import MainLayout from '../main';

export default class HomePage extends Component {

  render() {
    const { isAdmin, igItems } = this.props;
    const filteredIgItems = _.map(igItems, (val, key) => ({id: key, ...val}))

    return (
      <MainLayout>
        <h1>Tyler Brown</h1>
        <h3>Is Admin: {`${isAdmin}`}</h3>
        <ul>
          {filteredIgItems.map(igItem => (
            <li key={igItem.id}>
              <img src={igItem.imageStandard.url} width="200" height="200" />
            </li>
          ))}
        </ul>
      </MainLayout>
    );
  }

}
