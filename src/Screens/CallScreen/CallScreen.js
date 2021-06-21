import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import {fontNames} from '../../styles/fontNames';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
export default class CallScreen extends Component {
  _onClick = () => {
    console.log("CallScreen")
  };
  render() {
    return (
      <View>
        <Header
          centerView={{alignItem: 'center', borderWidth: 1}}
          leftIcon={imagePath.back}
          centerText={'Calls'}
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
          _onPress={this._onClick}
          leftViewStyle={{flex: 0.2}}
          rightIconStyle={{marginLeft: 25}}
        />
        <View style={{flexDirection: 'column', alignItem: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: moderateScaleVertical(300),
            }}>
            {' '}
            Call Screen Working{' '}
          </Text>
        </View>
      </View>
    );
  }
}
