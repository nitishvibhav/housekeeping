import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import FilterTop from '../components/FilterTop';
import HomePageCard from '../components/HomePageCard';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Today's Task</Text>
        <Image
          source={require('../../assets/images/notification.png')}
          style={{height: 24, width: 24}}
        />
      </View>
      <ScrollView
        horizontal
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}>
        <FilterTop category="All" color="black" backgroundColor="#FFC600" />
        <FilterTop category="To Do" color="black" backgroundColor="#DADADA" />
        <FilterTop
          category="In Progress"
          color="black"
          backgroundColor="#DADADA"
        />
        <FilterTop
          category="Completed"
          color="black"
          backgroundColor="#DADADA"
        />
      </ScrollView>
      <ScrollView>
        <HomePageCard text="done" onPress={()=>navigation.navigate('ToDoPage')}/>
        <HomePageCard text="To-do" onPress={()=>navigation.navigate('ToDoPage')}/>
        <HomePageCard text="In-progress" />
        <HomePageCard text="In-progress" />
        <HomePageCard text="To-do" />
        <HomePageCard text="To-do" />
        <HomePageCard text="done" />
        <HomePageCard text="To-do" />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 24,
    color: 'black',
    fontWeight: '800',
  },
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 20,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  scrollview: {
    paddingLeft: 10,
    width: '100%',
    paddingVertical: 10,
    backgroundColor:'white'
  },
});
