import React from 'react';
import SettingsScreen from './SettingsScreen';
import SettingsBtnsBlock from './settingsBtnsBlock'


class SettingsCounter extends React.Component {



  render = () => {
    let classForWrapperSettingsCounter=this.props.currentDisplaySettings===true ? 'wrapperSettingsCounter currentDisplay' :'wrapperSettingsCounter'
    return (
      <div className={classForWrapperSettingsCounter}>
        <SettingsScreen minValue={this.props.minValue}
          onMinValue={this.props.onMinValue}
          maxValue={this.props.maxValue}
          onMaxValue={this.props.onMaxValue}
          onClickCounterValue={this.props.onClickCounterValue}
          errorMax={this.props.errorMax}
          errorMin={this.props.errorMin}

        />
        <SettingsBtnsBlock set={this.props.set}
          onSet={this.props.onSet}
          isButtonSet={this.props.isButtonSet}
        />
      </div>
    );
  }
}
export default SettingsCounter;

