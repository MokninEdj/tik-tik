import { createSettingsStyles } from "@/assets/styles/settings.style";
import { api } from "@/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

const ProgressStats = () => {
  const { colors } = useTheme();
  const progressStatsStyles = createSettingsStyles(colors);
  const todos = useQuery(api.todos.getTodos);
  const completedTodos = todos?.filter((todo) => todo.isCompleted).length || 0;
  const totalTodos = todos?.length || 0;
  const activeTodos = totalTodos - completedTodos;
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={progressStatsStyles.section}
    >
      <Text style={progressStatsStyles.sectionTitle}>Progress Stats</Text>
      <View style={progressStatsStyles.statsContainer}>
        <LinearGradient
          colors={colors.gradients.background}
          style={[
            progressStatsStyles.statCard,
            { borderLeftColor: colors.primary },
          ]}
        >
          <View style={progressStatsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={progressStatsStyles.statIcon}
            >
              <Ionicons name="list" size={20} color={"white"} />
            </LinearGradient>
          </View>
          <View>
            <Text style={progressStatsStyles.statNumber}>{totalTodos}</Text>
            <Text style={progressStatsStyles.statLabel}>Total Todos</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={colors.gradients.background}
          style={[
            progressStatsStyles.statCard,
            { borderLeftColor: colors.success },
          ]}
        >
          <View style={progressStatsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.success}
              style={progressStatsStyles.statIcon}
            >
              <Ionicons name="checkmark-circle" size={20} color={"white"} />
            </LinearGradient>
          </View>
          <View>
            <Text style={progressStatsStyles.statNumber}>{completedTodos}</Text>
            <Text style={progressStatsStyles.statLabel}>Completed Todos</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={colors.gradients.background}
          style={[
            progressStatsStyles.statCard,
            { borderLeftColor: colors.warning },
          ]}
        >
          <View style={progressStatsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.warning}
              style={progressStatsStyles.statIcon}
            >
              <Ionicons name="time" size={20} color={"white"} />
            </LinearGradient>
          </View>
          <View>
            <Text style={progressStatsStyles.statNumber}>{activeTodos}</Text>
            <Text style={progressStatsStyles.statLabel}>Active Todos</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;
