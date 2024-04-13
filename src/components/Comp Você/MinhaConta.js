import { useState } from 'react';
import { Button, Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; // ou qualquer outra biblioteca de ícones

export default function MinhaConta({handle}) {
  const [perfil, setPerfil] = useState({
    nome: "mateus Mendes",
    email: "mendessilveriomateus@gmail.com",
    telefone: "(00)00000-0000",
    Cpf: "123456789123"

  })
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  return (
    <View style={styles.container}>
      <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
      <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <View>
      <TouchableOpacity onPress={pickImage} style={{ flexDirection: 'row', alignItems: 'center' }}>
  {image ? (
    <Image source={{ uri: image }} style={styles.image} />
  ) : (
    <Ionicons name="person-circle-outline" size={300} color="white" style={{ marginRight: 5 }} />
  )}
</TouchableOpacity>
        
      </View>
      <View style={{alignItems: "center", backgroundColor: 'white',width: 400, borderRadius:20, height: 300, justifyContent: "center"}}>
        <Text style={{  fontSize: 30 }}> Nome do perfil: </Text>
        <Text style={{  }}> {perfil.nome}</Text>
        <Text style={{ fontSize: 30}}> Email: </Text>
        <Text style={{  }}>{perfil.email}</Text>
        <Text style={{ fontSize: 30 }}> telefone: </Text>
        <Text style={{ }}> {perfil.telefone}</Text>
        <Text style={{fontSize: 30 }}> Cpf:</Text>
        <Text style={{ }}>{perfil.Cpf}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 120
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});