import { Radio } from 'antd';
import React from 'react';

class MyRadio extends React.Component {
    state = {
      value: '',
    };
  
    onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
      this.props.senddata(this.state.value)
    };
  
    render() {
      return (
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio value='事假'>事假</Radio>
          <Radio value='病假'>病假</Radio>
        </Radio.Group>
      );
    }
}

export default MyRadio