import React from 'react';
import ReactDOM from 'react-dom';

import PcHeader from './components/pc_header';
import PcFooter from './components/pc_footer';

export default class Index extends React.Component {

  render() {
    return (
      <div>
          <PcHeader/>
          <PcFooter/>
      </div>
    )
  }

}
