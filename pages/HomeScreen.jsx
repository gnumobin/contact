import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Swipeout } from "react-native-swipeout-component";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../Style/General";
import { primaryData, secondaryData } from "../data";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [cards, setCards] = useState(primaryData);
  const [showCards, setShowCards] = useState(secondaryData);

  const [search, setSearch] = useState("");

  // Buttons
  let globalTitle = null;
  let globalItem = null;

  const rightButtons = [
    {
      component: (
        <Pressable
          style={styles.swipeoutBtnDelete}
          onPress={() => {
            globalItem?.description?.replace(globalItem, "");
            deleteCard(cards, setCards, globalItem.id);
          }}
        >
          <Icon name="trash" size={24} color="#fa5252" />
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable
          style={styles.swipeoutBtnEdit}
          onPress={() => {
            globalItem?.description?.replace(globalItem, "");
            const item = { title: globalTitle, ...globalItem };
            navigation.navigate("EditScreen", {
              item,
              showCards,
              setShowCards,
            });
          }}
        >
          <Icon name="pencil" size={24} color="#212529" />
        </Pressable>
      ),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* SearchBar */}
      <View>
        <Icon
          name="search"
          size={24}
          color="#212529"
          style={styles.searchIcon}
        />
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          onChange={searchHandler.bind(
            this,
            search,
            cards,
            setCards,
            showCards,
            setShowCards
          )}
          style={styles.searchInput}
          placeholder="Just Search it! 😉"
        />
      </View>

      {/* Cards */}
      <View style={styles.primaryCards}>
        <FlatList
          data={showCards}
          renderItem={({ item }) => (
            <Swipeout
              style={styles.swipeout}
              right={rightButtons}
              buttonWidth={80}
              autoClose={true}
              onOpen={() => {
                globalItem = item;
                globalTitle = item.title;
              }}
            >
              <View>
                <Pressable
                  style={styles.primaryCard}
                  onPress={() =>
                    navigation.navigate("ProductScreen", {
                      item,
                      showCards,
                      setShowCards,
                    })
                  }
                >
                  <Image
                    source={
                      !item.img.toString().includes("file")
                        ? item.img
                        : { uri: item.img }
                    }
                    style={styles.image}
                  />
                  <Text style={styles.primaryCardText}>{item.title}</Text>
                </Pressable>
              </View>
            </Swipeout>
          )}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Home Btn */}
        <Pressable style={styles.footerItem}>
          <Icon name="home" size={52} color="#212529" />
          <Text style={styles.footerText}>Home</Text>
        </Pressable>
        {/* New Btn */}
        <Pressable
          style={styles.footerItem}
          onPress={(_) =>
            navigation.navigate("NewScreen", { showCards, setShowCards })
          }
        >
          <Icon name="plus" size={52} color="#212529" />
          <Text style={styles.footerText}>New</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const deleteCard = (cards, setCards, id) => {
  const newCards = cards.filter((card) => card.id !== id);
  setCards(newCards);
};

const searchHandler = (search, cards, setCards, showCards, setShowCards) => {
  const flag = search.length > 1;
  if (flag) {
    const newShowCards = cards.filter((item) => {
      return item.title, item.title.includes(search);
    });
    setShowCards(newShowCards);
  } else {
    setShowCards(cards);
  }
};
