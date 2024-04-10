import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Linking } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CamQrCode({ handle }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [qrCodeData, setQrCodeData] = useState('');
  const [qrCodeScanned, setQrCodeScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const onBarCodeScanned = ({ type, data }) => {
    setQrCodeData(data);
    setQrCodeScanned(true); // Altera o estado para true quando um código QR é escaneado
  };

  const handleQrCodeData = (data) => {
    console.log('QR code escaneado:', data);
    Linking.openURL(data);
  };

  const clearQRCodeData = () => {
    setQrCodeData('');
    setQrCodeScanned(false); // Limpa o estado quando o botão "Escanear Novamente" é pressionado
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso à câmera não concedido</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={qrCodeScanned ? undefined : onBarCodeScanned} // Desativa a leitura de QR code após o primeiro escaneamento
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
      >
        <View style={styles.squareOverlay}>
          <View style={styles.square} />
        </View>
        <TouchableOpacity
          onPress={() => handle(false)}
          style={styles.backButton}
        >
          <View style={styles.backButtonIcon}>
            <Icon name="arrow-left" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </Camera>
      <View style={styles.overlay}>
        {qrCodeData !== '' && (
          <>
            <Text style={styles.overlayText}>QR Code escaneado:</Text>
            <TouchableOpacity onPress={() => handleQrCodeData(qrCodeData)}>
              <Text style={styles.qrCodeData}>{qrCodeData}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearQRCodeData} style={styles.scanAgainButton}>
              <Text style={styles.scanAgainButtonText}>Escanear Novamente</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  camera: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  squareOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    width: 250,
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  qrCodeData: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  scanAgainButton: {
    padding: 10,
    backgroundColor: '#3f51b5',
    borderRadius: 5,
  },
  scanAgainButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
