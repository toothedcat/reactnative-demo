import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scroll:{
        flex:1,
        flexDirection:'row'
    },
    pageA:{
        flex:1,
        backgroundColor:'#f88'
    },
    pageB:{
        flex:1,
        width:'50%',
        backgroundColor:'#8f8'
    },
    pageC:{
        flex:1,
        backgroundColor:'#88f'
    }
});

export default class PagingDemo extends React.Component{
    static navigationOptions = {
        title:'Paging Demo'
    };
    render(){
        return (
            <ScrollView pagingEnabled horizontal style={styles.scroll}>
                <View style={styles.pageA}><Text>1</Text></View>
                <View style={styles.pageB}><Text>2</Text></View>
                <View style={styles.pageC}><Text>3</Text></View>
            </ScrollView>
        );
    }
}