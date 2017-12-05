import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Footer extends Component {
  constructor(props, context) {
    super(props, context)
    
  }
  render() {
      return (
        <View style={styles.box}>
          <Text style={styles.headline}>CryptoTicker Footer</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#7abfe0',
      flex: 1,
      width: '100%'
    },
    headline: {
      fontSize: 40,
      margin: 10
    }
  });

export default Footer;