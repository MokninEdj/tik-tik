import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const TodoInput = () => {
  const { colors } = useTheme();
  const todoInputStyles = createHomeStyles(colors);
  const addTodo = useMutation(api.todos.addTodo);
  const [newTodo, setNewTodo] = React.useState("");
  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        await addTodo({ text: newTodo.trim() });
        setNewTodo("");
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Failed to add todo");
      }
    }
  };
  return (
    <View style={todoInputStyles.inputSection}>
      <View style={todoInputStyles.inputWrapper}>
        <TextInput
          style={todoInputStyles.input}
          placeholder="What needs to be done?"
          placeholderTextColor={colors.textMuted}
          onChangeText={setNewTodo}
          value={newTodo}
          onSubmitEditing={handleAddTodo}
        />
        <TouchableOpacity
          disabled={!newTodo.trim()}
          onPress={handleAddTodo}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={
              newTodo.trim() ? colors.gradients.primary : colors.gradients.muted
            }
            style={[
              todoInputStyles.addButton,
              newTodo.trim() && todoInputStyles.addButtonDisabled,
            ]}
          >
            <Ionicons name="add" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoInput;
