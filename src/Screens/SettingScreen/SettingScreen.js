import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../../Component/Header'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
export default class SettingScreen extends Component {
    _onClick = () => {
        console.log("SettingScreen")
      };
    render() {
        return (
            <View>
                    <Header
          centerView={{alignItem: 'center', borderWidth: 1}}
          centerText={'Setting'}
          leftText={''}
          _onPress={this._onClick}
          leftIconStyle={{width: moderateScale(35), height: moderateScale(35), marginLeft: moderateScaleVertical(10)}}
          headerStyle={{paddingVertical: moderateScaleVertical(10)}}
          centerTextStyle={{
            marginTop: 5,
          }}
          leftViewStyle={{flex: 0.2}}
        />

                <View style={{flexDirection:'column',alignItem:'center'}}>
        <Text style={{textAlign:'center',marginVertical:moderateScaleVertical(300)}}> Setting Screen Working</Text>
        </View>
            </View>
        )
    }
}
