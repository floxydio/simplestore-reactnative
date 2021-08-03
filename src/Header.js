import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function Header({title}) {
  const style = StyleSheet.create({
    global: {
      margin: 0,
      padding: 0,
    },
    text_title: {
      fontSize: 50,
      color: 'red',
    },
    img: {
      width: 50,
      height: 50,
      borderRadius: 100 / 2,
      borderStyle: 'solid',
      borderWidth: 1.5,
      borderColor: 'white',
      marginRight: 20,
    },
    navbar: {
      marginTop: 20,
      padding: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title_text: {
      color: 'black',
      fontSize: 20,
      marginLeft: 20,
    },
    line1: {
      borderWidth: 0.2,
      borderColor:'grey',
      margin:10,
    },
  });

  return (
    <View style={style.global}>
      <View style={style.navbar}>
        <Text style={style.title_text}>{title}</Text>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={style.img}
        />
      </View>
      <View style={style.line1} />

    </View>
  );
}
