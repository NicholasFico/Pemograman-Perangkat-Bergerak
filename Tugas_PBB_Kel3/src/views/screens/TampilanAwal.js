import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import LogoIbik from "../../assets/logo-ibik.png";

const TampilanAwal = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <View>
        <Text style={styles.Text}>Timetable For Today</Text>
        {"\n"}
        </View>
      <ScrollView>
        <View style={styles.container2}>
          <ion-icon name="phone-portrait-outline"></ion-icon>
          <Text style={styles.h1}>Pemograman</Text>
          <Text style={styles.h2}>Perangkat Bergerak</Text>
          <Text style={styles.h3}>07.30 - 08.30</Text>
          {"\n"}
        </View>
        <View style={styles.container3}>
          <ion-icon name="phone-portrait-outline"></ion-icon>
          <Text style={styles.h4}>Lab.Pemograman</Text>
          <Text style={styles.h5}>Perangkat Bergerak</Text>
          <Text style={styles.h6}>08.30 - 09.30</Text>
          {"\n"}
        </View>
        <View style={styles.container4}>
          <ion-icon name="globe-outline"></ion-icon>
          <Text style={styles.h7}>Pemograman Web</Text>
          <Text style={styles.h8}>10.00 - 11.00</Text>
          {"\n"}
        </View>
        <View style={styles.container5}>
          <ion-icon name="globe-outline"></ion-icon>
          <Text style={styles.h9}>Lab Pemograman</Text>
          <Text style={styles.h10}>Web</Text>
          <Text style={styles.h11}>11.00 - 13.00</Text>
        </View>
      </ScrollView>
      </View>

      <View>
        <Text>Feeds</Text>
      </View>
      <View >
        <Image source={LogoIbik} style={styles.imgLogo} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    flex:2
  },
  container2:{
    backgroundColor:"lightsalmon",
    justifyContent:"center"
  },
  Text:{color:"purple", fontSize:12,fontWeight:"bold"},
  h1:{color:"white", fontSize:10, fontWeight:"bold" },
  h2:{color:"white", fontSize:10, fontWeight:"bold" },
  h3:{color:"white", fontSize:8},
  
  container3:{
    backgroundColor:"lightsalmon",
    justifyContent:"center"
  },
  h4:{color:"white", fontSize:10, fontWeight:"bold" },
  h5:{color:"white", fontSize:10, fontWeight:"bold" },
  h6:{color:"white", fontSize:8},

  container4:{
    backgroundColor:"lightsalmon",
    justifyContent:"center"
  },
  h7:{color:"white", fontSize:10, fontWeight:"bold" },
  h8:{color:"white", fontSize:8},

  container5:{
    backgroundColor:"lightsalmon",
    justifyContent:"center"
  },

  h9:{color:"white", fontSize:10, fontWeight:"bold" },
  h10:{color:"white", fontSize:10, fontWeight:"bold" },
  h11:{color:"white", fontSize:8} 
})

export default TampilanAwal;
