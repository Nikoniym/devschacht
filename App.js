import React, { Component } from 'react'
// import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, View, SectionList, ActivityIndicator, Text, FlatList, Alert, AppRegistry, Image, TextInput, Button, StyleSheet} from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://localhost:3000/todos.json', {"method":"GET"})
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.todos,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                    keyExtractor={({id}) => id}
                />
            </View>
        );
    }
}


