import React, {Component, PropTypes} from 'react';

import {readFileSync} from 'fs';

const manifestPath = './build/manifest.json';
const assetManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

class ApplicationLayout extends Component {

  render() {
    return (
      <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.mainComponent}}></div>
        <script src={assetManifest.main.js}></script>
      </body>
      </html>
    )
  }
}

ApplicationLayout.propTypes = {
  mainComponent: PropTypes.string.isRequired,
};

export default ApplicationLayout;