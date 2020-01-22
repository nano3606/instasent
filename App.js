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
    chronometerInterval: null
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
    this.setState({
      chronometerInterval: setInterval(() => this.chronometer(), 1000)
    })
  }

  stop(){
    clearInterval(this.state.chronometerInterval)
  }

  reset(){
    clearInterval(this.state.chronometerInterval)
    this.setState({
      hours: `00`,
      minutes: `00`,
      seconds: `00`,
    })
  }

  chronometer(){
    this.state.seconds ++

    if (this.state.seconds < 10){
      this.setState(previousState => ({
        seconds: `0` + previousState.seconds
      }))
    } else {
      this.setState(previousState => ({
        seconds: + previousState.seconds
      }))
    }

    if (this.state.seconds > 59) {
      this.state.minutes ++
      this.setState(previousState => ({
        seconds: `00`,
        minutes: + previousState.minutes
      }))

      if (this.state.minutes < 10){
        this.setState(previousState => ({
          minutes: `0` + previousState.minutes
        }))
      } else {
        this.setState(previousState => ({
          minutes: + previousState.minutes
        }))
      }
    }

    if (this.state.minutes > 59) {
      this.state.hours ++
      this.setState(previousState => ({
        minutes: `00`,
        hours: + previousState.hours
      }))
      
      if (this.state.hours < 10){
        this.setState(previousState => ({
          hours: `0` + previousState.hours
        }))
      } else {
        this.setState(previousState => ({
          hours: + previousState.hours
        }))
      }
    }
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
        <Content contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View style={{
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center' ,
            backgroundColor: 'blue',
            width: '50%',
            borderRadius: 30,
            }}
          >
            <Text style={{fontSize: 35, color: 'white'}}>{this.state.hours} : </Text><Text style={{fontSize: 35, color: 'white'}}>{this.state.minutes} : </Text><Text style={{fontSize: 35, color: 'white'}}>{this.state.seconds}</Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.play()}>
              <Text>PLAY</Text>
            </Button>
            <Button onPress={() => this.stop()}>
              <Text>STOP</Text>
            </Button>
            <Button onPress={() => this.reset()}>
              <Text>RESTART</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}