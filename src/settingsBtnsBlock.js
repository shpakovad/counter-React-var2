import React from 'react';
import Btns from './Btns';


class SettingsBtnsBlock extends React.Component {

  render = () => {
    return (
      <div className='settingsBtnsBlock'>
        <Btns set={this.props.set}
          onSet={this.props.onSet}
          isButtonSet={this.props.isButtonSet}
  
 
        />
      </div>
    );
  }
}
export default SettingsBtnsBlock;

