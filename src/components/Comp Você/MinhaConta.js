import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MinhaConta({ handle }) {
  const [perfil, setPerfil] = useState({
    nome: "Usuário Exemplo",
    foto: null,
    idade: 25,
    email: "exemplo@email.com",
    cidade: "Exemplópolis",
    // Adicione mais informações conforme necessário
  });

  useEffect(() => {
    // Solicitar permissão para acessar a galeria de fotos
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'É preciso permitir acesso à galeria de fotos para mudar a foto de perfil.');
      }
    })();
  }, []);

  const escolherFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPerfil({ ...perfil, foto: result.uri });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={escolherFoto}>
        {perfil.foto ? (
          <Image source={{ uri: perfil.foto }} style={{ width: 200, height: 200, borderRadius: 100 }} />
        ) : (
          <Text style={{ fontSize: 24, marginBottom: 10 }}>Escolher Foto</Text>
        )}
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>{perfil.nome}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>Idade: {perfil.idade}</Text>
      <Text style={{ fontSize: 18 }}>Email: {perfil.email}</Text>
      <Text style={{ fontSize: 18 }}>Cidade: {perfil.cidade}</Text>
      {/* Adicione mais informações conforme necessário */}
      <Button title="Voltar" onPress={() => handle(false)} />
    </View>
  );
}
