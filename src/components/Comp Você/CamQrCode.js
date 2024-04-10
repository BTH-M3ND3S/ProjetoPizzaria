import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CamQrCode({ handle }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [qrCodeData, setQrCodeData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const onBarCodeScanned = ({ type, data }) => {
    setQrCodeData(data);
    // Aqui você pode fazer o que quiser com os dados do QR code escaneado, por exemplo, enviá-los para o componente pai usando a função handle.
    handleQrCodeData(data);
  };

  const handleQrCodeData = (data) => {
    // Aqui você pode implementar o que deseja fazer com os dados do QR code, como enviar para o componente pai ou executar alguma ação específica.
    console.log('QR code escaneado:', data);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso à câmera não concedido</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={onBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => handle(false)}
            style={{ position: 'absolute', top: 20, left: 20 }}
          >
            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: 50,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="arrow-left" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
