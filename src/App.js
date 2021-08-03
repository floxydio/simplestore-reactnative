import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import Header from './Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyIcon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [title, setTitle] = useState('Hai\nDio Okta Rovelino');
  const [item, setItem] = useState([
    {id: 1, text: 'Milk', harga: 25000},

    {id: 2, text: 'Corn', harga: 15000},

    {id: 3, text: 'Beef', harga: 10000},

    {id: 4, text: 'Wagyu A5', harga: 5000},
  ]);

  const style = StyleSheet.create({
    list: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ml_1: {
      marginLeft: 10,
    },
    mr_1: {
      marginRight: 10,
    },
    textitem: {
      textAlign: 'center',
    },
    textlabel: {
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
    main: {
      marginTop: 30,
    },
    wc: {
      marginTop: 'auto',
      display: 'flex',
      textAlign: 'center',
      color: 'white',
      fontSize: 18,
    },
    ic: {
      marginTop: 'auto',
      display: 'flex',
      textAlign: 'center',
      color: 'white',
    },
    rowlist: {
      marginLeft: 20,
      marginRight: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      padding: 10,
    },
    product1: {
      borderRadius: 10,
      width: 100,
      backgroundColor: 'purple',
      height: 130,
    },
    product2: {
      borderRadius: 10,
      width: 100,
      backgroundColor: 'purple',
      height: 130,
    },
    product3: {
      borderRadius: 10,
      width: 100,
      backgroundColor: 'purple',
      height: 130,
    },
    cari: {
      marginBottom: 20,
      paddingLeft: 20,
      marginLeft: 20,
      marginRight: 20,
      borderStyle: 'solid',
      borderWidth: 1.5,
      borderColor: 'black',
    },
    searchi: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      backgroundColor: '#A66658',
    },
    searcht: {
      color: 'white',
      marginLeft: 10,
    },
  });

  const deleteItem = id => {
    setItem(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <ScrollView>
      <Header title={title} />
      {/* <TextInput placeholder="Write Your Item..." onChangeText={(e) => addTodo(e) } /> */}
      {/* <FlatList
        data={item}
        renderItem={({item}) => (
          <View style={style.list}>
            <Text style={style.textitem}>
              {item.te
              xt} - {item.harga}
            </Text>
            <Button title="Delete" onPress={() => deleteItem(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      /> */}
      <View style={style.main}>
        <TextInput placeholder="Cari Apa..." style={style.cari} />
        <View style={style.searchi}>
          <Icon name="search" color={'white'} />
          <Text style={style.searcht}>Search</Text>
        </View>
        <Text style={style.textlabel}>Promo kamu untuk hari ini</Text>
        <View style={style.rowlist}>
          <View style={style.product1}>
            <Icon name="tshirt" size={40} style={style.ic} />
            <Text style={style.wc}>Baju Olahraga</Text>
          </View>
          <View style={style.product2}>
            <Icon name="wrench" size={40} style={style.ic} />
            <Text style={style.wc}>Alat Elektronik</Text>
          </View>
          <View style={style.product3}>
            <MyIcon name="fast-food" size={40} style={style.ic} />
            <Text style={style.wc}> Makanan Ringan</Text>
          </View>
        </View>
        <Text style={style.textlabel}>Jangan Sampai kehabisan mhank...</Text>
        <View style={style.rowlist}>
          <View style={style.product1}>
            <Icon name="tshirt" size={40} style={style.ic} />
            <Text style={style.wc}>Baju Olahraga</Text>
          </View>
          <View style={style.product2}>
            <Icon name="wrench" size={40} style={style.ic} />
            <Text style={style.wc}>Alat Elektronik</Text>
          </View>
          <View style={style.product3}>
            <MyIcon name="fast-food" size={40} style={style.ic} />
            <Text style={style.wc}> Makanan Ringan</Text>
          </View>
        </View>
        <Text style={{textAlign: 'center', marginTop: 30}}>
          Copyright @DioRovelino
        </Text>
      </View>
    </ScrollView>
  );
}
