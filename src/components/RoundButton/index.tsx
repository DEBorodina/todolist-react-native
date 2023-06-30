import React from "react";
import { Pressable } from "react-native";
import AppText from "../AppText";
import { styles } from "./styles";
import { ButtonProps } from "../AddButton/types";

export const RoundButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onClick}>
      <AppText style={styles.text}>{children}</AppText>
    </Pressable>
  );
};
