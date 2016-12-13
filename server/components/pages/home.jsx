import React, { Component } from 'react';
import _ from 'lodash';

import MainLayout from '../main';

export default class HomePage extends Component {

  render() {
    const { igUser, igItems } = this.props;
    // TODO: filter them
    const filteredIgItems = _.chain(igItems)
      .map((val, key) => ({id: key, ...val}))
      .sortBy(['createdAt'])
      .reverse()
      .take(30)
      .value();
    const halfCount = Math.ceil(filteredIgItems.length / 2);
    const leftIgItems = filteredIgItems.slice(0, halfCount);
    const rightIgItems = filteredIgItems.slice(halfCount);

    return (
      <MainLayout igUser={igUser}>

        <div className="home-layer layer-main-content">
          <div className="main-content">
            <img className="home-avatar" src="http://gravatar.com/avatar/867388b9e54784c6d9e99b485d42aead?s=200" alt="Tyler Brown" />
            <h1 className="home-title">Tyler Brown</h1>
            <p className="home-bio">Lover of coffee, fitness, motorcycles, and the outdoors. Software engineer. Father of two little dudes. Enjoying life in Chattanooga&apos;s Southside.</p>
            <p className="home-links">
              <a href="mailto:tyler@tybro.io">tyler@tybro.io</a>
              &nbsp;|&nbsp;
              <a href="http://resume.tybro.io">résumé</a>
            </p>
            <ul className="home-social">
              <li><a href="https://www.instagram.com/tybro0103/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/tybro0103/"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/tyler-brown-03367217"><i className="fa fa-linkedin" /></a></li>
              <li><a href="http://stackoverflow.com/users/202875/tybro0103"><i className="fa fa-stack-overflow" /></a></li>
              <li><a href="https://www.facebook.com/tybro0103"><i className="fa fa-facebook" /></a></li>
            </ul>
          </div>
        </div>

        <div className="home-layer layer-instas">
          <div className="instas instas-left">
            {leftIgItems.map(igItem => (
              <a href={igItem.link} key={igItem.id} className="insta" style={{backgroundImage: `url(${igItem.imageStandard.url})`}} />
            ))}
          </div>
          <div className="instas instas-right">
            {rightIgItems.map(igItem => (
              <a href={igItem.link} key={igItem.id} className="insta" style={{backgroundImage: `url(${igItem.imageStandard.url})`}} />
            ))}
          </div>
        </div>

      </MainLayout>
    );
  }

}
