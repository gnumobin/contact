import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ImgPicker from "../components/ImgPicker";
import { styles } from "../Style/General";

export default function NewScreen({ route }) {
  const navigation = useNavigation();

  const [image, setImage] = useState("../assets/cards/card-1.png");

  const { cards, setCards } = route.params;
  // Data
  const [cardTitle, setCardTitle] = useState();
  const [cardDescription, setCardDescription] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.newForm}>
        <View style={styles.label}>
          <Text style={styles.labelText}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCardTitle}
            value={cardTitle}
            placeholder="Mobile: Galaxy A30"
            maxLength={24}
          />
        </View>

        <View style={styles.label}>
          <Text style={styles.labelText}>Description</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCardDescription}
            value={cardDescription}
            multiline={true}
            numberOfLines={4}
            placeholder="Galaxy A30 is great and fast android mobile"
            maxLength={400}
          />
        </View>

        <ImgPicker image={image} setImage={setImage} />

        <Pressable
          onPress={() =>
            createNewCard(
              navigation,
              cards,
              setCards,
              cardTitle,
              cardDescription
            )
          }
        >
          <Text style={styles.submitBtn}>Create</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.footerItem}
          onPress={(_) => navigation.goBack()}
        >
          <Icon name="home" size={48} color="#212529" />
          <Text style={styles.footerText}>Home</Text>
        </Pressable>
        <Pressable style={styles.footerItem}>
          <Icon name="plus" size={48} color="#212529" />
          <Text style={styles.footerText}>New</Text>
        </Pressable>
      </View>
    </View>
  );
}

const createNewCard = (
  navigation,
  cards,
  setCards,
  cardTitle,
  cardDescription
) => {
  const createID = Math.random();

  // const img = require(image + '')
  const newCard = {
    title: cardTitle,
    description: cardDescription,
    img: "",
    id: createID,
    testimonial: [],
  };

  setCards([...cards, newCard]);

  navigation.goBack();
};
