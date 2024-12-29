import { Image, StyleSheet, Pressable, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImgPicker({ image, setImage }) {
  const address = !image.includes('assets') ? { uri: image } : null;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Pressable style={styles.container} onPress={pickImage}>
      {image && <Image source={address} style={styles.image} />}
      <Text style={styles.cardText}>Pick an image from gallery</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // Spaces
    padding: 8,
    // height:150,
    // Colors
    backgroundColor: 'rgba(173, 181, 189, 0.1)',
    // Border
    borderRadius: 12,
    // Move content to center
    alignItems: 'center',
    justifyContent: 'center',
    // Pos
    position: 'relative'
  },
  image: {
    width: '100%',
    height: 115,
    borderRadius: 28,
    objectFit: 'cover',
  },
  cardText: {
    color: '#adb5bd',
    fontSize: 14,
    fontWeight: 600,
    marginTop: 8
  },
});