import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const todos = useQuery(api.todos.getTodos);
  const { colors } = useTheme();
  const headerStyles = createHomeStyles(colors);
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const totalTodos = todos?.length || 0;
  const progress = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={headerStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={24} color="white" />
        </LinearGradient>
        <View style={headerStyles.titleTextContainer}>
          <Text style={headerStyles.title}>Today&apos;s Task</Text>
          <Text style={headerStyles.subtitle}>
            {completedTodos} of {totalTodos} completed
          </Text>
        </View>
      </View>
      {totalTodos > 0 && (
        <View style={headerStyles.progressContainer}>
          <View style={headerStyles.progressBarContainer}>
            <View style={headerStyles.progressBar}>
              <LinearGradient
                colors={colors.gradients.success}
                style={[headerStyles.progressFill, { width: `${progress}%` }]}
              />
            </View>
            <Text style={headerStyles.progressText}>
              {Math.round(progress)}%
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
