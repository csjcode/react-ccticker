import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Content from './src/components/Content';

export default class App extends React.Component {
  getDate(){
    let myDate = new Date().toJSON().slice(0,19).replace(/T/g,' (UTC) ');
    return myDate.replace(/-/g,'/');
     
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content title='Market.API.cc' myDate={this.getDate()}/>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
