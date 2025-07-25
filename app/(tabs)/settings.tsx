import { createSettingsStyles } from "@/assets/styles/settings.style";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { Text, View } from "react-native";

const Settings = () => {
  const { toggleDarkMode, colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
  return (
    <View>
      <Text>settings</Text>
    </View>
  );
};

export default Settings;
