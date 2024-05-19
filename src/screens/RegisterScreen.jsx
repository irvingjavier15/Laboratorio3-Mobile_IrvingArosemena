import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import GradientText from "../components/GradientText.jsx";
import HandlerTouchableUtil from "../components/HandlerTouchableUtil.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(86, 72, 251, 1)", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />
      <View style={styles.headertab}>

        <HandlerTouchableUtil route="Login" handlerstyle={styles.return_btn}>
            <Ionicons name="caret-back-outline" size={32} color="black" />
        </HandlerTouchableUtil>

      </View>
      <View style={styles.formstyle}>
        <GradientText text="Registration" style={styles.textGradient} />

        <View style={styles.textInputsContainer}>

          <TextInput
            style={[styles.inputText, {width: '45%'}]}
            placeholder="Name"
            placeholderTextColor={"#999"}
          />

          <TextInput
            style={[styles.inputText, {width: '45%'}]}
            placeholder="Lastname"
            placeholderTextColor={"#999"}
          />

          <TextInput
            style={[styles.inputText, {width: '95%'}]}
            placeholder="Username"
            placeholderTextColor={"#999"}
          />

          <TextInput
            style={[styles.inputText, {width: '20%'}]}
            placeholder="Age"
            keyboardType="numeric"
            maxLength={3}
            placeholderTextColor={"#999"}
          />

          <TextInput
            style={[styles.inputText, {width: '70%'}]}
            placeholder="Phone"
            keyboardType="phone-pad"
            placeholderTextColor={"#999"}
          />

          <TextInput
            style={[styles.inputText, {width: '95%'}]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={"#999"}
          />

          <TextInput
            style={[styles.inputText, {width: '95%'}]}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={"#999"}
          />


        </View>

        <HandlerTouchableUtil route="Home" handlerstyle={styles.registerButton}>
            <Ionicons name="save" size={20} color="black" />
            <Text style={styles.buttonText}>{"  "}Save</Text>
        </HandlerTouchableUtil>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020005",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 350,
    zIndex: -1,
  },
  headertab: {
    paddingTop: "2%",
    height: "10%",
    justifyContent: "center",
  },
  return_btn: {
    width: "10%",
    borderRadius: 10,
    margin: "4%",
    paddingVertical: "1%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00FF99",
  },
  registerButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#00FF99",
    padding: 15,
    fontSize: "8px",
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  formstyle: {
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 15,
  },

  textGradient: {
    backgroundColor: "transparent",
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 18,
  },

  textInputsContainer: {
    width: '100%',
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingVertical: '10%'
  },

  inputText: {
    padding: 20,
    marginVertical: '1.5%',
    borderColor: "#424242",
    borderWidth: 1,
    borderRadius: 20,
    color: "#686868",
    backgroundColor: "#1C1C1C",
  },
});
