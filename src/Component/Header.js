import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {fontNames} from '../styles/fontNames';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export default function Header({
  leftText,
  leftIcon = {},
  leftIconStyle = {},
  centerText,
  leftTextStyle = {},
  centerTextStyle = {},
  rightIconStyle = {},
  centerView: {},
  leftViewStyle = {},
  isIcon,
  headerStyle = {},
  centerViewStyle = {},
  rightViewStyle = {},
  rightIcon = {},
  _onPress,
  // rightIconStyle={}
}) {
  return (
    <View style={{...styles.mainView, ...headerStyle}}>
      <View style={{...styles.leftView, ...leftViewStyle}}>
        <TouchableOpacity onPress={() =>_onPress()}>
          {!!isIcon ? (
            <Image source={leftIcon} style={{...leftIconStyle}} />
          ) : (
            <Text style={{...styles.leftText}}>{leftText}</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={{...styles.centerView, ...centerViewStyle}}>
        {isIcon ? (
          <Image
            source={imagePath.salman}
            style={{...styles.centerImage}}
          />
        ) : null}
        <Text
          numberOfLines={1}
          style={{...styles.centerText, ...centerTextStyle}}>
          {centerText}
        </Text>
      </View>
      <View style={{...styles.rightView, ...rightViewStyle}}>
        <Image
          source={rightIcon}
          style={{...styles.rightImage, ...rightIconStyle}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    height: moderateScale(55),
    backgroundColor: colors.lightGrey,
  },
  leftView: {
    flex: 0.2,
    marginTop: moderateScaleVertical(6),
  },
  centerView: {
    flex: 0.6,
    flexDirection: 'row',
  },
  rightView: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: moderateScaleVertical(10),
  },
  centerText: {
    fontFamily: fontNames.bold,
    fontSize: moderateScale(20),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: moderateScaleVertical(14),
  },
  leftText: {
    fontFamily: fontNames.semiBold,
    color: colors.themeColor,
    fontSize: moderateScale(16),
    marginHorizontal: moderateScaleVertical(15),
    marginVertical: moderateScaleVertical(10),
  },
  rightImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    marginTop: moderateScale(5),
    tintColor: colors.themeColor,
  },
  centerImage:
  {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius:moderateScale(50),
    marginRight: moderateScaleVertical(10),
    marginTop: moderateScale(2),
  }
});

// import React from 'react';
// import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import {color} from 'react-native-reanimated';
// import {connect} from 'react-redux';
// import imagePath from '../constants/imagePath';
// import colors from '../styles/colors';
// import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
// function Header({
//   textData,
//   onBack,
//   themeColor,
//   onClickMenuIcon,
//   icChatPic,
//   isChatScreen,
// }) {
//   return (
//     <View style={[styles.headerMainView,{backgroundColor: !!themeColor ? themeColor : colors.themeColor,}]}>
//       <TouchableOpacity onPress={() => onClickMenuIcon()}>
//         {!!isChatScreen ? (
//           <Image source={imagePath.backIcon} style={styles.backIcon} />
//         ) : (
//           <Image source={imagePath.menu} style={styles.backIcon} />
//         )}
//       </TouchableOpacity>
//       <Text style={styles.textData}>{textData}</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   backIcon: {
//     width: 30,
//     height: 30,
//     tintColor: colors.whiteColor,
//     marginVertical: moderateScaleVertical(8),
//     marginHorizontal: moderateScaleVertical(15),
//   },
//   textData: {
//     marginVertical: 8,
//     fontSize: 23,
//     color: colors.whiteColor,
//   },
//   headerMainView: {
//     flexDirection: 'row',
//     marginBottom: 2,
//     height: 50,
//   },
// });
// const mapStateToProps = state => {
//   return {
//     // themeColor: state.auth.themeColor,
//     themeColor: state.main.themeColor,
//   };
// };
// export default connect(mapStateToProps)(Header);
