import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DataLoader from './DataLoader';
import CommunityList from './CommunityList';
let dataloader = new DataLoader();
class CCPamphlet2 extends Component {
  render() {
    return (
        <View style={styles.container}>
            <CommunityList ref="communityList" dataloader = {dataloader}/>
        </View>
    );
  }
  componentDidMount(){
    let communityList = this.refs.communityList;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = CCPamphlet2