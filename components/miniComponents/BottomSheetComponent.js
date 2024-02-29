import React, { useCallback, useMemo, useRef ,useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";
const BottomSheetComponent = () => {

  const bottomSheetRef = useRef(null);

  
  const snapPoints = useMemo(() => ["40%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);




const handleAccept=()=>{
        setContent(
            <View style={styles.accpetedContainer}>
            <View>
                    <View style={styles.cancel}>
                        <Text style={styles.textChoice}>
                  <Ionicons name='close-sharp' size={60} color='white' />
                        </Text>
                    </View> 
                    <Text style={styles.textChoice}>Cancel ride</Text> 
            </View>
            <View>
                    <View style={styles.otp}>
                        <Text style={styles.textOtp}>
                           OTP
                        </Text>
                    </View> 
            </View>
            <View>
                    <View style={styles.call}>
                        <Text style={styles.calltxt}>
                  <Ionicons name='call' size={60} color='white' />;
                        </Text>
                    </View> 
                    <Text style={styles.textChoice}>Call</Text> 
            </View>
        </View>
        )
    }

    const [content,setContent]=useState(
      <View style={styles.acceptOrReject}>
      <View>
        <View style={styles.cross}>
          <Text style={{ textAlign: "center" }}>
            <Ionicons name="close-sharp" size={60} color="white" />;
          </Text>
        </View>
        <Text style={styles.textChoice}>Reject</Text>
      </View>
      <View>
        <View style={styles.tick}>
        <TouchableOpacity onPress={handleAccept}>
          <Text style={{ textAlign: "center" }}>
            <Ionicons name="checkmark-sharp" size={60} color="white" />;
          </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textChoice}>Accept</Text>
          
      
      </View>
    </View>
  )

  // function to expand the bottom sheet

  return (
    
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges} 
    >
      <View style={styles.sheetContainer}>
        <View style={styles.header}>
          <View style={styles.pickupContainer}>
            <Text style={styles.pickupText}>Pickup</Text>
          </View>
          <View style={styles.timeDistanceContainer}>
            <Text style={styles.timeDistanceText}>1.5 km</Text>
            <Text style={styles.timeDistanceText}>5 mins</Text>
          </View>
        </View>
      
        <View>
          <View style={styles.passengerDetails}>
            <View style={styles.details}>
          <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('C:\\Users\\kaust\\Desktop\\code\\driver\\assets\\dp.jpg')} />
             </View>
             <View style={styles.textDetails}>
              <Text style={styles.detailName}>Name :  Tarak  </Text> 
              <Text style={styles.detailText}>College :SIES </Text> 
              <Text style={styles.detailName}>Destination : SIES </Text> 
             </View>

            </View>
          </View>
       
{content}

        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  detailName:{
    textAlign:'center',
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  detailText:{
    textAlign:'center',
    fontSize:16,
    color:'white'
  },
  textDetails:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'70%',
    // borderBlockColor:'yellow',
    // borderWidth:1
  },
 imgContainer:{
  margin:3,
  // borderBlockColor:'pink',
  // borderWidth:2,
  width:110
 },
  details:{
  flex:1,
  flexDirection:'row',
  maregin:1,
  // borderBlockColor:'green',
  // borderWidth:4,
  width:'100%',
  justifyContent:'space-between'
 },
  img:{
    flex:1,
    alignItems:'center',
    borderRadius:10,
height:100,
width:100
 },
  sheetContainer: {
    backgroundColor: "#2E333A",
    borderRadius:20
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  pickupText: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 2,
    color: "white",
  },
  
  pickupContainer: {
    padding: 5,
    paddingHorizontal: 10,
  },
  timeDistanceContainer: {
    flexDirection: "row",
    paddingVertical:10
  },

  timeDistanceText: {
    textAlign: "right",
    fontSize: 15,
    marginHorizontal: 2,
    marginHorizontal: 10,
    backgroundColor: "grey",
    color: "white",
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
  },
  passengerDetails: {
    padding:10,
    borderBlockColor:'#585959',
    borderWidth:1,
    borderRadius:10,
    width: "96%",
    // borderWidth: 1,
    // borderColor: "red",
    height: "43%",
    margin: 6,
  },
  acceptOrReject: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
 
  textChoice: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  tick: {
    backgroundColor: "green",
    width: 70,
    padding: 2,
    borderRadius: 10,
    marginHorizontal: 40,
  },
  cross: {
    backgroundColor: "red",
    width: 70,
    padding: 2,
    borderRadius: 10,
    marginHorizontal: 40,
  },

  call:{
      backgroundColor:'#FFBC07',
      width:70,
  padding:2,
  borderRadius:10,
  marginHorizontal:10,
  marginTop:10
  },
  textOtp:{
      textAlign:'center',
      fontSize:40
  },
  otp:{
      backgroundColor:'#FFBC07',
      width:80,
  padding:9,
  borderRadius:10,
  marginHorizontal:10,
  marginTop:10
  },
  cancel:{
      backgroundColor:'red',
      width:70,
  padding:2,
  borderRadius:10,
  marginHorizontal:10,
  marginTop:10
  },
  accpetedContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
      paddingVertical: 8,
      margin:6
  },
  textChoice:{
      fontSize:20,
      textAlign:'center',
      color:'white',
  },
});

export default BottomSheetComponent;
