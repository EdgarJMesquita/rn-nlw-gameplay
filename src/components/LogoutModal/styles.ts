import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },

  content: {
    backgroundColor: theme.colors.secondary100,
    height: 174,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 24,
    marginBottom: 23
  },

  button: {
    height: 56,
    width: 160,
    borderRadius: 8,
  },

  buttonTitle: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
    lineHeight: 25
  }
});