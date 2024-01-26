import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import RootComponent from './RootComponent/RootComponent';
import Ionicons from '@expo/vector-icons/Ionicons';
const D_pickup = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // function to expand the bottom sheet
  const handlePresentModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <RootComponent>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput style={styles.searchBoxInput} placeholder='Enter your destination' />
        </View>

        <View style={styles.goContainer}>
          <Text style={{ color: 'white' }}>Hello world </Text>
        </View>
      </View>

      {/* button to expand the bottom sheet */}
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, borderRadius: 10 }} onPress={handlePresentModal}>
        <Text style={styles.text}>Press to open the bottom sheet</Text>
      </TouchableOpacity>

      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints} onChange={handleSheetChanges}>
        <View style={styles.sheetContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Custom Header</Text>
          </View>
            {/* Add more content here as needed */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => bottomSheetRef.current?.close()}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
         <View>
    <View style={styles.acceptOrReject}>
            <View>
            <View style={styles.tick}>
                <Text style={{textAlign:'center'}}>
          <Ionicons name='checkmark-sharp' size={60} color='white' />;
                </Text>
            </View>
            <Text style={styles.textChoice}>Accept</Text> 
            </View>
            
            <View>

            <View style={styles.cross}>
                <Text style={{textAlign:'center'}}>
          <Ionicons name='close-sharp' size={60} color='white' />;
                </Text>
            </View> 
            <Text style={styles.textChoice}>Reject</Text> 
            </View>

    </View>
        
        </View>
        </View>
      </BottomSheet>
    </RootComponent>
  );
};

const styles = StyleSheet.create({
acceptOrReject:{

flexDirection:'row',
backgroundColor:'black',
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
  goContainer: {},
  searchBox: {
    backgroundColor: 'white',
    height: 50,
    padding: 10,
    marginTop: 50,
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
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
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
