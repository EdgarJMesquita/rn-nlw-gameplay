import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    marginTop: 12,
    padding: 15,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: theme.colors.secondary50 
  }
})