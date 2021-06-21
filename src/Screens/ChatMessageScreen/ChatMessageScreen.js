import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {Fragment} from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';
import {fontNames} from '../../styles/fontNames';
export default class ChatMessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    // this.onSend = this.onSend.bind(this);
  }
  componentDidMount = () => {
    const {item1} = this.props.route.params;
    let data = item1.messages;
    const messages = data.map((data, index) => {
      let date = item1.messages[index].time;
      let dateArray = date.split('T');
      let message = {
        _id: Math.floor(Math.random() * 100 + 1),
        text: data.message,
        createdAt: dateArray[0],
        user: {
          _id: Math.floor(Math.random() * 100 + 1),
          avatar: imagePath.salman,
        },
      };
      return message;
    });
    this.setState({messages});
    console.log(messages, 'messages');
  };
  onSend(messages = []) {
    console.log(messages, 'messages');
    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  renderBubble = props => {
    const {themeColor} = this.props;
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.themeColor,
          },
        }}
      />
    );
  };
  renderSend = props => {
    const {themeColor} = this.props;
    return (
      <Send {...props}>
        <View>
          <Image
            source={imagePath.send}
            style={[styles.renderSend, {tintColor: colors.themeColor}]}
          />
        </View>
      </Send>
    );
  };
  scrollToBottomComponent = () => {
    const {themeColor} = this.props;
    return (
      <Image
        source={imagePath.downArrow}
        style={[styles.messageScroll, {tintColor: colors.themeColor}]}
      />
    );
  };
  onBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };
  render() {
    const {item1} = this.props.route.params;
    const {messages} = this.state;
    return (
      <>
        <Header
          centerView={{}}
          leftIcon={imagePath.back}
          centerText={item1.topic}
          leftText={strings.EDIT}
          leftIconStyle={{
            width: moderateScale(35),
            height: moderateScale(35),
            marginLeft: moderateScaleVertical(10),
            tintColor:colors.themeColor
          }}
          isIcon={true}
          headerStyle={{paddingVertical: moderateScaleVertical(10)}}
          centerTextStyle={{
            marginTop: moderateScaleVertical(7),
            marginLeft: 2,
            fontFamily: fontNames.semiBold,
            width: moderateScale(210),
            fontSize: moderateScale(18),
          }}
          leftViewStyle={{flex: 0.15}}
          rightIcon={imagePath.call}
          rightIconStyle={{marginLeft: 25, marginTop: -4}}
          _onPress={this.onBack}
        />
        <Fragment>
          <GiftedChat
            //   inverted={false}
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: messages._id,
            }}
            renderBubble={this.renderBubble}
            alwaysShowSend
            renderSend={this.renderSend}
            scrollToBottom
            scrollToBottomComponent={this.scrollToBottomComponent}
          />
        </Fragment>
      </>
    );
  }
}
const styles = StyleSheet.create({
  renderSend: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
    marginVertical: 7,
  },
  messageScroll: {
    width: 30,
    height: 30,
    marginHorizontal: 3,
    marginVertical: 3,
  },
});
