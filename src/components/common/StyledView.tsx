import React from "react";
import { View, ViewProps } from "react-native";

const StyledView: React.FC<ViewProps> = ({ children, style, ...props }) => {
  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
};

export default StyledView;
