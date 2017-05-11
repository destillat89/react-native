import React, { Component } from 'react';
import {
  Animated, Easing
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 5000
      }
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,
          transform: [{
            translateY: this.state.fadeAnim.interpolate({
              inputRange:  [0,   0.5, 0.7, 0.9, 1],
              outputRange: [150, 300, 500, -50, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            }),
          },
          {
            rotate: this.state.fadeAnim.interpolate({
              inputRange:  [0, 0.5, 0.7, 0.9, 1],
              outputRange: ['0deg', '90deg',  '180deg', '270deg', '0deg']  // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }],
          backgroundColor: this.state.fadeAnim.interpolate({
            inputRange:  [0, 0.5, 0.7, 0.9, 1],
            outputRange: [this.props.style.backgroundColor, 'green', 'orange', 'purple', this.props.style.backgroundColor]
          })
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
