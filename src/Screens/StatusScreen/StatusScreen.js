import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../Component/Header';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
export default class StatusScreen extends Component {
  _onClick = () => {
    console.log("StatusScreen")
  };
  render() {
    return (
      <View>
        <Header
          centerView={{alignItem: 'center', borderWidth: 1}}
          centerText={'Status'}
          leftText={''}
          leftIconStyle={{
            width: moderateScale(35),
            height: moderateScale(35),
            marginLeft: moderateScaleVertical(10),
            
          }}
          headerStyle={{paddingVertical: moderateScaleVertical(10)}}
          centerTextStyle={{
            marginTop: 5,
          }}
          leftViewStyle={{flex: 0.2}}
          _onPress={this._onClick}
        />
        <View style={{flexDirection: 'column', alignItem: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: moderateScaleVertical(300),
            }}>
            {' '}
            Status Screen Working{' '}
          </Text>
        </View>
      </View>
    );
  }
}
