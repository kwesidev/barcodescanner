"use scrict";
import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
// Home Screen 
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barcodeText: null,
        }
  
    }
    // subscribe to this event listener when back button is pressed
    componentDidMount = () => {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({ barcodeText: this.props.route.params?.barcodeText });
        });

       
    }
    // unsubcribe event 
    componentWillUnmount = () =>  {
        this._unsubscribe();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.section}><Text style={{fontFamily: "comic sans ms", fontWeight: "bold"}}>BARCODE TEXT : {this.state.barcodeText} </Text>
                </View>
                <View style={styles.section}>
                    <Button title="Scan Barcode" onPress={() => this.props.navigation.navigate('ScanBarcode')} />
                </View>
                <View style={styles.section}>
                    <Button title="Clear" onPress={() => this.setState({ barcodeText: null })} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
       
    },
    section :{
      margin: 10,
    }
});