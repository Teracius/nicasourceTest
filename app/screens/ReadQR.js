import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import {useDispatch} from 'react-redux';
import {increment} from '../store/slices/counterSlice';

export const ReadQR = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code data ${data} has been scanned!`);
    console.log(data);
    dispatch(increment(data))
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Scan Again'} onPress={() => setScanned(false)} />}
      <View style={{position:"absolute",bottom:"10%"}}>
      <Button title={'Scan Again'} onPress={() => setScanned(false)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    }
 }); 