import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
      return (
        <View style={styles.box}>
          <Text style={styles.headline}>CryptoTicker Header</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#282828',
      flex: 1,
      alignItems: 'center',
      width: '100%'
    },
    headline: {
      color:'white',
      fontSize: 22,
      margin:40
    }
  });

export default Header;