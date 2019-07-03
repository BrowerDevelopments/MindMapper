import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Button, TouchableOpacity, StyleSheet} from 'react-native';

class Node extends Component {
     static propTypes = {
          content: PropTypes.string.isRequired,
          textStyles: PropTypes.oneOfType([
               PropTypes.array,
               PropTypes.number,
               PropTypes.shape({}),
          ]).isRequired,
     }

     render = () => {
          const {content, textStyles} = this.props;

          return (
               <View style={styles.nodeBackground}>
                    <Button
                    title={content}
                    style = {styles.nodeBackground}
                    />
               </View>
          )
     }
}

const styles = StyleSheet.create({
     nodeBackground: {
          backgroundColor: '#987C60',
          borderRadius: 5,
          borderWidth: 5,
          borderColor: '#6C441C',
     }
});

export default Node;