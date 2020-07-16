import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  stepper_line: {
    width: 60,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 0, 
    left: 10,
    right: 10
  },
  circle: {
    overflow: 'hidden',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
