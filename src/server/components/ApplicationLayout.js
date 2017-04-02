import React, {Component, PropTypes} from 'react';
import {
  StaticRouter,
} from 'react-router';

import ApplicationRouter from '../../shared/ApplicationRouter';

class ApplicationLayout extends Component {
  render() {
    return (
      <StaticRouter context={{}} location={this.props.location}>
        <html>
        <head>
          <title>Hello World</title>
        </head>
        <body>
          <div id="app">
            <ApplicationRouter />
          </div>
        </body>
        </html>
      </StaticRouter>
    )
  }
}

ApplicationLayout.propTypes = {
  location: PropTypes.string.isRequired
};

export default ApplicationLayout;