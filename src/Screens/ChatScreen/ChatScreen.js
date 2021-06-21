import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import {fontNames} from '../../styles/fontNames';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import Loader from '../../Component/Loader';
Header;
export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatData: [],
      isvalid: false,
    };
  }
  componentDidMount = () => {
    this.setState({isvalid: true});
    actions
      .getChatApi()
      .then(res => {
        this.setState({chatData: res});
        this.setState({isvalid: false});
      })
      .catch(err => {
        console.log(err, 'err');
        this.setState({isvalid: false});
      });
  };
  itemPress = item1 => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.CHAT_MESSAGE_SCREEN, {item1});
  };

  timeFormate = time => {
    time = time.toString().match(/^([01]\d|2[0-3])(.)([0-5]\d)(.[0-5]\d)?$/);
    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return (time = time[0] + ':' + time[2] + ' ' + time[5]);
  };
  _renderItem = item => {
    //  let test=.length-1
    let lastChatData = item.messages.slice(-1);
    let date = lastChatData[0].time;
    let timeArray = date.split('T');
    let time = timeArray[1];
    let finalTime = this.timeFormate(time);
    return (
      <TouchableOpacity
        onPress={() => this.itemPress(item)}
        style={styles.mainTuchView}>
        <View style={{flex: 0.15, alignItems: 'center'}}>
          <Image source={imagePath.salman} style={{...styles.chatUserImage}} />
        </View>
        <View style={{...styles.chatTopicView}}>
          <Text style={styles.chatTopicText} numberOfLines={1}>
            {item.topic}
          </Text>

          <Text numberOfLines={2} style={styles.chatMessageText}>
            {lastChatData[0].from + ' : ' + lastChatData[0].message}
          </Text>
          <View style={styles.chatBottomLineOne}></View>
        </View>
        <View style={{flex: 0.15}}>
          <Text style={styles.chatTime}>{finalTime}</Text>
          <View style={styles.chatBottomLineTwo}></View>
        </View>
      </TouchableOpacity>
    );
  };
  _onEdit = () => {
    console.log('edit');
  };
  render() {
    const {isvalid} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header
          centerView={{}}
          centerText={strings.CHATS}
          leftText={strings.EDIT}
          rightIcon={imagePath.edit}
          _onPress={this._onEdit}
        />
        <View>
          <FlatList
            data={this.state.chatData.chats}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={() => <View style={{}} />}
            renderItem={({item}) => this._renderItem(item)}
          />
        </View>
        <Loader isvalid={isvalid} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  chatUserImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(50),
  },
  chatTopicView: {flex: 0.7, marginLeft: moderateScaleVertical(15)},
  mainTuchView: {
    flexDirection: 'row',
    paddingHorizontal: moderateScaleVertical(5),
    paddingVertical: moderateScaleVertical(10),
    flex: 1,
  },
  chatTopicText: {
    fontFamily: fontNames.semiBold,
    fontSize: moderateScale(15),
  },
  chatMessageText: {
    fontFamily: fontNames.semiBold,
    marginTop: moderateScaleVertical(6),
    color: colors.greyTextColor,
  },
  chatBottomLineOne: {
    height: moderateScale(1),
    backgroundColor: colors.lightGrey,
    marginTop: moderateScale(10),
  },
  chatBottomLineTwo: {
    height: moderateScale(1),
    backgroundColor: colors.lightGrey,
    marginTop: moderateScale(38),
  },
  chatTime: {
    fontFamily: fontNames.semiBold,
    color: colors.greyTextColor,
    fontSize: moderateScale(13),
  },
});
