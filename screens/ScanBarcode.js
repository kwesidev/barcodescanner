"use strict";
import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Alert} from 'react-native';
import { RNCamera } from 'react-native-camera';
// ScanBarcode  Screen
export default class ScanBarcode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            torchOn: false,
            isLoading: true
        }
        this.camera = null;

    }
    // Callback function when barcode is detected
    onBarCodeRead = (scanResult) => {
        console.warn(scanResult.type);
        console.warn(scanResult.data);
        this.props.navigation.navigate('Home', {barcodeText : scanResult.data});
        return;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <RNCamera
                        type={RNCamera.Constants.Type.back}
                        defaultTouchToFocus
                        flashMode={this.state.torchOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                        onBarCodeRead={this.onBarCodeRead.bind(this)}
                        ref={ref => this.camera = ref}

                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        style={{
                            height: Dimensions.get('window').height
                        }}
                    >
                        <Text style={{fontWeight:"bold", color: "red" ,textAlign: "center"}}>SCAN BARCODE</Text>
                    </RNCamera>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});