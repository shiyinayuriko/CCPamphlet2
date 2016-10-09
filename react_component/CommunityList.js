import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
class CommunityList extends Component {
    constructor(props) {
        super(props);
        this.dataChangeCallback = this.dataChangeCallback.bind(this);
        this.dataloader = props.dataloader;
        this.dataloader.regDataChangeCallback(this.dataChangeCallback);

        this.state = {
            data : "this.dataloader.getServerData().updateCode"
        }
        this.dataloader.reloadData();
    }
    render() {
        return (
        <Text>
            {this.state.data}
        </Text>
        ); 
    }

    dataChangeCallback(communityDataChanged){
        this.setState({
            data : this.dataloader.getServerData().updateCode
        });
    }
}


module.exports = CommunityList