import { Image, StyleSheet, Pressable, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const imgDir = FileSystem.documentDirectory + "assets/cards/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

export default function ImgPicker({ image, setImage, setDestImage }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      saveImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri) => {
    await ensureDirExists();
    const fileName = new Date().getTime() + ".jpg";
    const dest = imgDir + fileName;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setDestImage(dest);
  };

  return (
    <Pressable style={styles.container} onPress={pickImage}>
      <Image source={{ uri: image }} style={styles.image} />

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
    backgroundColor: "rgba(173, 181, 189, 0.1)",
    // Border
    borderRadius: 12,
    // Move content to center
    alignItems: "center",
    justifyContent: "center",
    // Pos
    position: "relative",
  },
  image: {
    width: "98%",
    height: 200,
    borderRadius: 12,
  },
  cardText: {
    color: "#adb5bd",
    fontSize: 14,
    fontWeight: 600,
    marginTop: 12,
  },
});
