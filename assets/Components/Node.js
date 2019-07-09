/**
 * This is a node component that represents a new branch
 * in the tree
 * This will do more soon, will have a level of detail where a tap brings the node
 * to the center of the screen and then another tap allows the text to be edited
 * @author Br0wer
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {TextInput, TouchableOpacity, StyleSheet} from 'react-native';

class Node extends Component {
     /**
      * The default states for this prop
      * sets the text input to default to New Branch
      * @param {} props 
      */
     constructor(props) {
          super(props);

          this.state = { 
               text: 'New Branch',
               selected: false,
          };
     }

     /**
      * Defines some basic properties for the prop
      * @textStyles is a definer for the font
      */
     static propTypes = {
          textStyles: PropTypes.oneOfType([
               PropTypes.array,
               PropTypes.number,
               PropTypes.shape({}),
          ]).isRequired,
     }

     /**
      * Draws the component given the inputs
      */
     render = () => {

          let { textStyles } = this.props;

          return (
               <TouchableOpacity style={styles.nodeBackground}>
                    <TextInput style={textStyles}
                         onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                    />
               </TouchableOpacity>
          )
     }
}

/**
 * The base styles for this node
 */
const styles = StyleSheet.create({
     nodeBackground: {
          backgroundColor: '#987C60',
          borderRadius: 5,
          borderWidth: 5,
          borderColor: '#6C441C',
          padding: 10,
     }
});

export default Node;