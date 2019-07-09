/**
 * This is a component that will be draggable, and make it's children draggable.
 * @author Br0wer
 */

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {PanResponder, Animated, StyleSheet, View} from 'react-native';
import Node from '/Users/jacobbrower/Documents/ReactNative/MindMapping/assets/Components/Node.js';

class Draggable extends Component {
     constructor(props) {
          super(props);

          this.state = {
               pan: new Animated.ValueXY()
          }
     }

     componentWillMount() {
          this._panResp = PanResponder.create({
               onMoveShouldSetPanResponderCapture: () => true,
               onMoveShouldSetPanResponderCapture: () => true,
               onPanResponderGrant: (e, gestureState) => {
                    this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                    this.state.pan.setValue({x: 0, y: 0});
               },
               onPanResponderMove: Animated.event([
                    null, {dx: this.state.pan.x, dy: this.state.pan.y},
               ]),
               onPanResponderRelease: (e, {vx, vy}) => {
                    this.state.pan.flattenOffset();
               }
          });
     }

     render() {
          let {pan} = this.state;

          let [translateX, translateY] = [pan.x, pan.y];

          let translation = {transform: [{translateX}, {translateY}]};

          return (
               <View style = {styles.container} >
                    <Animated.View style = {translation}
                         {...this._panResp.panHandlers}>
                         <Node textStyles = {styles.text} />
                    </Animated.View>
               </View>
               
          );
     }
}

const styles = StyleSheet.create({
     text: {
          fontSize: 14,
          color: '#fff'
     },
});

export default Draggable;