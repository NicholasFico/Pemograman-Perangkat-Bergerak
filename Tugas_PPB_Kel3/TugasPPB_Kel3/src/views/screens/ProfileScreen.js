import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, SafeAreaView, Image} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"


export function ProfileScreen() {
 return(
   <SafeAreaView style={{flex: 1, backgroundColor: "#eee"}}>
      <ScrollView vertical={true}>

        <View style = {{paddingVertical: 15,paddingHorizontal: 10,backgroundColor: "#7a4988", borderBottomLeftRadius:10,borderBottomRightRadius:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20, marginHorizontal: 15}}>
          <Ionicons name='arrow-back' size={30} color={"#fff"} />
          <Text style= {{fontSize: 20, fontWeight: "bold", color: "#fff"}}>Profile</Text>
          <Ionicons name='create' size={30} color={"#fff"} />
        </View>
        <View style = {{height:200, marginHorizontal: 15, marginTop: -20, backgroundColor: "#fff", borderRadius: 15, justifyContent:  "center", marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 15,}}>
          <Image   
            source={require("../../assets/ava-boy.png")}
            style = {{height:100, width:"100%", resizeMode:"contain"}}
          />
          <Text style={{fontWeight: 'bold', textAlign:"center"}}>Nicholas Fico</Text>
          <Text style={{textAlign:"center", marginTop:8}}>202310077</Text>
          <View style = {{flexDirection: "row", justifyContent: "space-between", marginTop: 30, marginHorizontal:30}}>
            <Text>Semester : 4</Text>
            <Text>Gender : Male</Text>
          </View>
        </View>
        <View style = {{marginHorizontal: 15, padding:15, marginBottom:20, backgroundColor:"#fff", borderRadius: 15 }}>
          <View style = {{flexDirection: "row"}}>
              <Ionicons name='call' size={15} color={"#000"} />
              <Text style={{marginLeft: 15}}>087874544493</Text>
          </View>
            <View style = {{flexDirection: "row"}}>
              <Ionicons name='mail' size={15} color={"#000"} />
              <Text style = {{marginLeft: 15}}>nicholasfico03@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style = {{height:50, backgroundColor: "#f1f2f3", borderRadius: "7", marginHorizontal: 15, marginVertical:8, flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{marginLeft: 15, paddingVertical:10}}>Personal Detail</Text>
          <Ionicons name='arrow-forward' size={30} color={"#c5a6dd"}  />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {{height:50, flexDirection: "row",backgroundColor: "#f1f2f3", borderRadius: "15", marginHorizontal: 15, marginVertical:8, justifyContent: "space-between"}}>
          <Text style={{marginLeft: 15, paddingVertical:10}}>Friends List</Text>
          <Ionicons name='arrow-forward' size={30} color={"#c5a6dd"} />
        </View>
        </TouchableOpacity>
      </ScrollView>
   </SafeAreaView>
 )
}

export default ProfileScreen;