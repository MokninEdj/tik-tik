import { createSettingsStyles } from "@/assets/styles/settings.style";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const { toggleDarkMode, colors, isDarkMode } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
  const [isAutoSync, setIsAutoSync] = useState(false);
  const [isNotification, setIsNotification] = useState(true);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="moon" size={20} color={"white"} />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={"white"}
        />
      </View>
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="notifications" size={20} color={"white"} />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotification}
          onValueChange={setIsNotification}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={"white"}
        />
      </View>
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="sync" size={20} color={"white"} />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={setIsAutoSync}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={"white"}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
