import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Handlertouchable = ({ children, handlerstyle, route = null }) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={route ? () => navigation.navigate(route) : undefined}
    >
      <View style={[handlerstyle, { opacity: isPressed ? 0.9 : 1 }]}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Handlertouchable;
