import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.highlight,
    textAlign: 'center',
    paddingHorizontal: 30
  },
});