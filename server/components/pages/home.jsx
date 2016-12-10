import React, { Component } from 'react';
import _ from 'lodash';

import MainLayout from '../main';

export default class HomePage extends Component {

  render() {
    const { igUser, igItems } = this.props;
    // TODO: filter them
    const filteredIgItems = _.map(igItems, (val, key) => ({id: key, ...val}))
    const halfCount = Math.ceil(filteredIgItems.length / 2);
    const leftIgItems = filteredIgItems.slice(0, halfCount);
    const rightIgItems = filteredIgItems.slice(halfCount);

    return (
      <MainLayout igUser={igUser}>
        <h1>Tyler Brown</h1>
        <ul>
          {leftIgItems.map(igItem => (
            <li key={igItem.id}>
              <img src={igItem.imageStandard.url} width="200" height="200" />
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {rightIgItems.map(igItem => (
            <li key={igItem.id}>
              <img src={igItem.imageStandard.url} width="200" height="200" />
            </li>
          ))}
        </ul>
      </MainLayout>
    );
  }

}
