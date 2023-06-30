import { StyleSheet } from 'react-native';

import { COLORS } from './src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_MINT,
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    paddingHorizontal: 10,
    width: '100%',
  },
  todo: {
    color: COLORS.WHITE_COLOR,
  },
});
