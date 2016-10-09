import React, {
  AsyncStorage,
} from 'react-native';
let callbacks = [];
class DataLoader {
    constructor(props) {
        this.serverData = {};
        this.communityData = [];
        AsyncStorage.getItem("serverInfo").then((serverInfo) => {
            this.serverData = JSON.parse(serverInfo);
            this.responseCallbacks(false);
        });
        AsyncStorage.getItem("communityInfo").then((communityInfo) => {
            // this.serverData = JSON.parse(serverInfo);
            // this.responseCallbacks(true);
        });
    }
    reloadData() {
        let instance = this;
        fetch('http://whitecomet.net/CCPamphlet.php')
        .then((response) => response.json())
        .then((json) => {
            let communityDataChanged = false;
            if (json.updateCode != this.serverData.updateCode) {
                communityDataChanged = true;
                fetch(json.dataUrl)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                });
            };
            this.serverData = json;
            AsyncStorage.setItem("serverInfo", JSON.stringify(json));


            this.responseCallbacks(false);
        }).catch((error) => {
            console.error(error);
        });
    }

    getServerData() {
        return this.serverData;
    }
    getCommunityData(){
        return this.communityData;
    }

    regDataChangeCallback(callback){
        callbacks.push(callback);
    }
    responseCallbacks(communityDataChanged){
        callbacks.forEach(
            function(callback){
                callback(communityDataChanged);
            }
        );
    }
}

module.exports = DataLoader