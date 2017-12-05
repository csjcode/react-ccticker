import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Content extends Component {
    render() {
        return (
          <View style={styles.box}>
            <Text style={styles.headline}>CryptoTicker Content </Text>
            <Text style={{fontSize:20}}>{this.props.title}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#999',
      flex: 6,
      alignItems:'center',
      width: '100%'
    },
    headline: {
      fontSize: 40,
    }
  });

export default Content;