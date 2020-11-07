import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  imageWrapper: {
    flex: 1,
  },
  price: {
    color: colors.black,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  headline: {
    fontWeight: '700',
  },
  textContent: {
    alignItems: 'flex-start',
    flex: 4,
    flexWrap: 'wrap',
    fontWeight: '700',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingRight: 10,
  },
  roomCount: {
    color: colors.black,
    marginVertical: 3,
  },
});

export default styles;
