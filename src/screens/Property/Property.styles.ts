import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  content: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  amenitiesContainer: {
    backgroundColor: colors.gray.light,
    padding: 10,
  },
  amenities: {
    fontWeight: '500',
  },
  price: {
    fontStyle: 'italic',
    marginVertical: 10,
  },
  bathrooms: {
    fontWeight: '500',
    marginVertical: 10,
  },
});

export default styles;
