import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { View } from "react-native";

export default class Bananas extends Component {
  state = {
    loading: true,
    hours: `00`,
    minutes: `00`,
    seconds: `00`,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }

  play(){
    this.chronometer()
  }

  chronometer(){
    console.log('s1 :' + this.state.seconds)
    let s = this.state.seconds ++
    this.setState(previousState => ({
      seconds: `0` + previousState.seconds
    }
    ))
    console.log('s2 :' + this.state.seconds)
  }
  render() {

    if (this.state.loading) {
      return (
        <View></View>
      );
    }
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <Container>
        <Header />
        <Content>
          <Text>
            This is Content Sectionhh
          </Text>
          <Text>
            {this.state.seconds}
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={()=>this.play()}>
              <Text>PLAY</Text>
            </Button>
            <Button>
              <Text>STOP</Text>
            </Button>
            <Button>
              <Text>RESTART</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}