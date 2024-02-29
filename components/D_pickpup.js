import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import RootComponent from './RootComponent/RootComponent';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomSheetComponent from './miniComponents/BottomSheetComponent';
const D_pickup = () => {
  
  const bottomSheetRef = useRef(null);

  

  return (
    <RootComponent>
      {/* <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput style={styles.searchBoxInput} placeholder='Pick your current location' />
        </View>
        <View style={styles.searchBox}>
          <TextInput style={styles.searchBoxInput} placeholder='Enter your destination' />
        </View>
      </View> */}
      
     
    <BottomSheetComponent />
      
    </RootComponent>
  );
};


const styles = StyleSheet.create({
passengerDetails:{
width:'95%',
borderWidth:1,
height:'40%',
margin:10,
},
    acceptOrReject:{

flexDirection:'row',
backgroundColor:'grey',
    alignItems:'center',
justifyContent:'center',
paddingVertical:20

}
,    
tick:{
backgroundColor:'green',
width:70,
padding:2,
borderRadius:10,
marginHorizontal:40,

},
cross:{
    backgroundColor:'red',
width:70,
padding:2,
borderRadius:10,
marginHorizontal:40,
},

    searchContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBox: {
    backgroundColor: 'white',
    height: 50,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    width: '90%',
  },
  searchBoxInput: {
    textAlign: 'center',
  },
  text: {
    color: 'white',
    textAlign:'center'
  },
  textChoice: {
    color: 'white',
    textAlign:'center',
    fontSize:20
  },
  header: {
    flexDirection:'row',
    marginHorizontal: 20,
    justifyContent:'space-between'
  },
  pickupText: {
    textAlign:'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal:2
  },
  timeDistanceText: {
    textAlign:'right',
    fontSize: 15,
    marginHorizontal:2,
    marginHorizontal:10,
    backgroundColor:'grey',
    color:'white',
    borderRadius:10,
    padding:5,
    paddingHorizontal:10,

    
},
pickupContainer:{
// backgroundColor:'red',
// borderRadius:10,
padding:5,
paddingHorizontal:10,

  },
  timeDistanceContainer:{
flexDirection:'row',
  
},
contentContainer: {
    alignItems:'center'
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  closeButtonText: {
    color: 'white',
  },
});

export default D_pickup;
