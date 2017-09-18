import React from 'react';
import { View, Button } from 'react-native';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title:'Welcome'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, paddingTop: 16 }}>
                <Button onPress={() => {navigate('StyleDemo');}} title="Go to StyleDemo" />
                <Button onPress={() => {navigate('SizeFixedDemo');}} title="Go to SizeFixedDemo" />
                <Button onPress={() => {navigate('SizeFlexDemo');}} title="Go to SizeFlexDemo" />
                <Button onPress={() => {navigate('InputDemo');}} title="Go to InputDemo" />
            </View>
        );
    }
}