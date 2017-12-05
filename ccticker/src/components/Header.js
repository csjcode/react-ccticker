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
      backgroundColor: '#fefaaf',
      flex: 1,
      width: '100%'
    },
    headline: {
      fontSize: 40,
      margin: 20
    }
  });

export default Header;