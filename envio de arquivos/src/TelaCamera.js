import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal, Image, Linking } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

export default function TelaCamera() {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permissao, setPermissao] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [foto, setFoto] = useState("");
  const [flashOn, setFlashOn] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissao(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScannedData({ type, data });
  };

  const takePicture = async () => {
    if (cameraRef) {
      let foto = await cameraRef.takePictureAsync();
      if (foto) {
        if (Platform.OS === 'ios') {
          await MediaLibrary.requestPermissionsAsync();
        }
        setFoto(foto.uri)
        await MediaLibrary.saveToLibraryAsync(foto.uri);
      }
    }
  };

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const toggleFlash = () => {
    setFlashOn(
      flashOn === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  if (permissao === null) {
    return <View />;
  }
  if (permissao === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
  ref={(ref) => {
    setCameraRef(ref);
  }}
  style={{ flex: 1, width: "100%", aspectRatio: 3/4 }}
  type={type}
  flashMode={flashOn} 
  onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={toggleCameraType}>
            <Ionicons name="camera-reverse" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={takePicture}>
            <Ionicons name="camera" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={toggleFlash}>
            <Ionicons name={flashOn === Camera.Constants.FlashMode.off ? "flash-off" : "flash"} size={50} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
      {(permissao && foto) && 
        <Modal animationType='slide'
              transparent={true}
        >
          <Image 
          source={{uri: foto}}
          height={500}
          width={"100%"}
          />
          <TouchableOpacity style={{
              flex: 0.1,
              alignSelf: 'center',
              alignItems: 'center',
            }} onPress={()=> setFoto("")}>
           <Ionicons name="close" size={50} color="white" />
          </TouchableOpacity>
        </Modal>
      }

      {scannedData && (
        <View style={styles.barcodeDataContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(scannedData.data)}>
            <Text style={styles.barcodeDataText}>{scannedData.data}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 10,
              marginTop: 15
            }}
            onPress={() => setScannedData("")}
          >
            <Text>Limpar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  barcodeDataContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  barcodeDataText: {
    fontSize: 20,
    color: 'white',
  },
});
