import React, { Component } from 'react';

import MainLayout from '../../main';

export default class AdminIndex extends Component {

  render() {
    return (
      <MainLayout>
        <h1>Admin</h1>
        <ul>
          <li><a href="/admin/store">store</a></li>
          <li><a href="/admin/store-load">store load</a></li>
          <li><a href="/admin/store-set?foo=bar">store set</a></li>
          <li><a href="/admin/ig-fetch">IG fetch</a></li>
        </ul>
      </MainLayout>
    );
  }

}
