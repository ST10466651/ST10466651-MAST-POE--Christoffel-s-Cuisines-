import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d7d8',
    paddingHorizontal: 20,
  },  
  card: {
    width: '40%',
    marginBottom: 25,
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  maintitle: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '400',
  },
    title: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '400',
  },
  menuBox: {
    flex: 1,
    marginTop: 30,
    marginBottom: 90,
    marginLeft: 15,
    marginRight: 15,
    maxHeight: 600,
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
  },
  editmenuBox: {
    flex: 1,
    marginTop: 30,
    marginBottom: 60,
    marginLeft: 15,
    marginRight: 15,
    maxHeight: 600,
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
  },
  item: {
    alignItems: 'center',
    marginBottom: 20,
  },
    mainitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemDesc: {
    color: '#666',
    fontSize: 13,
    marginTop: 4,
    width: '90%',
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, // gives some space between images
    width: '100%',
  },
  image: {
    width: 165,
    height: 165,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },
  form: {
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#d9d7d8',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#a7a5a5',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  indexposition:{
    marginTop: 30,
    marginBottom: 121,
        flex: 1,
    backgroundColor: '#d9d7d8',
    paddingHorizontal: 20,
  },
    menuItem: { 
      marginBottom: 15, 
      padding: 10, 
      borderRadius: 8, 
      backgroundColor: '#f2f2f2' 
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d9d7d8',
    paddingVertical: 7,
    borderTopWidth: 1,
    borderTopColor: '#aaa',
    alignItems: 'center',
  },
});