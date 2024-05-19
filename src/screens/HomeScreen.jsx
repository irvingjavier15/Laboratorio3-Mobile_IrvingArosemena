import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import GradientText from "../components/GradientText";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";


const rankingData = [
  {
    id: 1,
    image: require("../../assets/thomasHouse.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    assists: 500,
    likes: '45k'
  },
  {
    id: 2,
    image: require("../../assets/thomasHouse.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    assists: 500,
    likes: '45k'
  },

  {
    id: 3,
    image: require("../../assets/thomasHouse.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    assists: 500,
    likes: '45k'
  },

  {
    id: 4,
    image: require("../../assets/thomasHouse.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    assists: 500,
    likes: '45k'
  },
];

const publication = [
  {
    id: 1,
    avatar: require("../../assets/costa.png"),
    image: require("../../assets/x.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    nameParty: 'Project x'
  }, 
  {
    id: 2,
    avatar: require("../../assets/costa.png"),
    image: require("../../assets/x.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    party: 'hard'
  },
  {
    id: 3,
    avatar: require("../../assets/costa.png"),
    image: require("../../assets/x.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    party: 'hard'
  },

  {
    id: 4,
    avatar: require("../../assets/costa.png"),
    image: require("../../assets/x.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    party: 'hard'
  },
  
  {
    id: 5,
    avatar: require("../../assets/costa.png"),
    image: require("../../assets/x.jpg"),
    name: "Project X",
    user: "ThomasKub16",
    location: "1234 Main Street, Burbank, CA 91501, USA",
    party: 'hard'
  },
];

const RankingItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.itemImage} />
    <View style={styles.participantsContainer}>
      <FontAwesome6 name="users" size={12} color="black" />
      <Text style={styles.participants}>{item.assists}</Text>
    </View>
    <View style={styles.likeContainer}>
      <EvilIcons name="heart" size={20} color="black" style={styles.like} />
      <Text>{item.likes}</Text>
    </View>
    <View style={styles.itemContainerDetails}>
      <Text style={styles.textName}>{item.name}</Text>
      <Text style={styles.textUser}>{item.user}</Text>
      <Text style={styles.textLocation}>{item.location}</Text>
    </View>
  </View>
);

const Publication = ({ publication }) => (
  <View style={styles.publicationContainer}>
    <View style={styles.headerPublication}>
      <View style={styles.avatarPublicationContainer}>
        <Image
          source={publication.avatar}
          style={styles.imageBackground}
          resizeMode="cover"
        />
      </View>
      <View style={styles.userNamePublication}>
        <Text>{publication.user}</Text>
      </View>
    </View>

    {/* aqui iria la foto debajo */}
    <Image source={publication.image} style={styles.imagePublication}/>
    <View styles={styles.publicationDetailsContainer}>
      <View styles={styles.actionsPublicationContainer}>
      <Text>Hola mundo</Text>
      </View>

    </View>
  </View>
);

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["rgba(86, 72, 251, 1)", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/costa.png")}
            style={styles.imageBackground}
            resizeMode="cover"
          />
        </View>

        <View style={styles.nameAdressContainer}>
          <GradientText text="Costa" style={styles.nameText}></GradientText>
          <Text style={styles.adressText}>Burbank,Ca</Text>
        </View>

        <View style={styles.ioniconsContainer}>
          <FontAwesome5 name="bell" size={30} color="white" />
          <Feather name="menu" size={30} color="white" />
        </View>
      </View>

      <View style={styles.rankingContainer}>
        <View style={styles.rankingOptionsContainer}>
          <GradientText text="best of the week" style={styles.nameText}></GradientText>
          <View style={styles.rankingTopViewContainer}>
            <Text style={styles.rankingTopText}>View all &gt;</Text>
          </View>
        </View>
        <FlatList
          data={rankingData}
          renderItem={({ item }) => <RankingItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
      </View>

      <View style={styles.publicationsContainer}>
      <FlatList
          data={publication}
          renderItem={({ item }) => <Publication publication={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          nestedScrollEnabled={false}
        />
      </View>
      
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020005",
  },

  headerContainer: {
    width: "100%",
    height: "10%",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  imageContainer: {
    width: "20%",
    height: "45%",
  },

  imageBackground: {
    flex: 1,
    width: "100%",
    height: '100%',
    borderRadius: 40,
  },

  nameAdressContainer: {
    flex: 1,
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    marginLeft: 15,
  },

  nameText: {
    backgroundColor: "transparent",
    fontWeight: "900",
    fontSize: 20,
  },

  adressText: {
    color: "#000",
    backgroundColor: "#00FF99",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    overflow: "hidden",
    alignSelf: "flex-start",
    fontWeight: "500",
  },

  ioniconsContainer: {
    flex: 1,
    width: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  rankingContainer: {
    height: "17%",
    backgroundColor: "transparent",
    display: "flex"
  },

  rankingOptionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 20,
  },

  rankingTopText: {
    fontSize: 15,
  },

  rankingTopViewContainer: {
    backgroundColor: "#00FF99",
    borderRadius: 10,
    padding: 5,
  },

  itemContainer: {
    width: 300,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  itemImage: {
    flex: 1,
    width: "100%",
    height: "80%",
  },

  participantsContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#00FF99",
    color: "#fff",
    padding: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },

  participants: {
    color: "#000",
  },

  likeContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#00FF99",
    borderRadius: 10,
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },

  like: {
    fontWeight: "bold",
  },

  itemContainerDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 13,
    rowGap: 5,
  },

  publicationsContainer: { 
    flex: 1,
    backgroundColor: 'red',
    // paddingHorizontal: 20
    display: 'flex',
    justifyContent: 'center'
  },

  publicationContainer:{
    width: 400,
    height: 300,
    backgroundColor: 'blue', 
    marginBottom: 25
  },

  headerPublication: {
    display: 'flex', 
    flexDirection: 'row',
    columnGap: 5
  },

  avatarPublicationContainer:{
    width: 20
  },

  imagePublication: {
    width: '100%', 
    height: '80%'
  }, 

  publicationDetailsContainer: {
    // padding: 20
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 350,
    zIndex: -1,
  },

  
});
