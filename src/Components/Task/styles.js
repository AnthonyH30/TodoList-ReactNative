import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  task: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.07)',
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: '600'
  },
  infoCloseView: {
    flexDirection: 'row'
  }
});