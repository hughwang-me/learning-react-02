import React from 'react';
import ReactDOM from 'react-dom';

import MobHeader from './components/mob_header';
import MobFooter from './components/mob_footer';

export default class MobIndex extends React.Component {

  render() {
    return (
      <div>
          <MobHeader/>
          <MobFooter/>
      </div>
    )
  }

}
