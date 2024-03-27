import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as Location from 'expo-location'
import MapView , {Marker} from 'react-native-maps';

export default function Local() {
    const mapRef = useRef();
    const [ erro, setErro] = useState();
    const [ localizacao, setLocalizacao] = useState();

    async function getLocation(){
      
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErro('Permissão Negada!');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocalizacao(location);
    }
    useEffect(()=>{
        getLocation();
        Location.watchPositionAsync({
            accuracy: Location.LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocalizacao(response);
            mapRef.current?.animateCamera({
                center: response.coords
            })

        })
    },[])
  return (
    <View style={styles.container}>
        {localizacao &&
        <MapView initialRegion={{
            latitude: localizacao?.coords.latitude,
            longitude: localizacao?.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05

        }} 
        style={styles.map}>
            <Marker coordinate={{
               latitude: localizacao?.coords.latitude,
               longitude: localizacao?.coords.longitude,
            }} />
        </MapView>
         }
         
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
