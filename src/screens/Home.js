import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Animated,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteMaintenanceDetails,
  getMaintenanceDetails,
} from '../redux/maintenance/action';
import {getLostAndFoundDetails} from '../redux/lostAndFound/action';
import {ImagePath} from '../assets/images/imagePath';
import {Swipeable} from 'react-native-gesture-handler';
import {get} from 'lodash';
import {useNavigation, } from '@react-navigation/native';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  

  const {maintenanceData} = useSelector(state => state.maintenanceReducer);
  const {lostandFoundData} = useSelector(state => state.lostAndFoundReducer);

  const handleDelete = async id => {
    try {
      const res = await dispatch(deleteMaintenanceDetails(id));
      const status = get(res, 'value.status', res.status);
      if (status === 200) {
        Alert.alert('Success', 'Data deleted successfully.');
        dispatch(getMaintenanceDetails());
      } else {
        console.error('Failed response data:', res);
        Alert.alert('Error', 'Failed to delete data.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while deleting data.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getMaintenanceDetails());
        await dispatch(getLostAndFoundDetails());
      } catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert('Error', 'Failed to fetch data.');
      }
    };

    fetchData();
  }, [dispatch]);

  const renderRightActions = (progress, dragX, id) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <Animated.View
          style={[styles.deleteButtonContainer, {transform: [{scale}]}]}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={ImagePath.menuPath}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Dashboard</Text>
      </View>
      <ScrollView>
        <View style={styles.miniContainerView}>
          <Text style={styles.textBig}>Maintenance Data</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.ViewAllText}>View All</Text>
            <Image source={ImagePath.nextIcon} style={styles.nextIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '20%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>Room</Text>
            </View>
            <View style={{width: '30%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>Category</Text>
            </View>
            <View style={{width: '25%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>Status</Text>
            </View>
            <View style={{width: '25%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>
                Description
              </Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
          {Array.isArray(maintenanceData?.result) ? (
            maintenanceData.result.map(item => (
              <Swipeable
                key={item._id}
                renderRightActions={(progress, dragX) =>
                  renderRightActions(progress, dragX, item._id)
                }>
                <TouchableOpacity
                  key={item._id}
                  onPress={() => navigation.navigate('Maintenance', {item})}
                  style={styles.container}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '20%', alignItems: 'flex-start'}}>
                      <Text style={{color: 'black', fontWeight: '400'}}>
                        {item.roomNumber}
                      </Text>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-start'}}>
                      <Text style={{color: 'black', fontWeight: '400'}}>
                        {item.category}
                      </Text>
                    </View>
                    <View style={{width: '25%', alignItems: 'flex-start'}}>
                      <Text style={{color: 'black', fontWeight: '400'}}>
                        {item.status}
                      </Text>
                    </View>
                    <View style={{width: '25%', alignItems: 'flex-start'}}>
                      <Text style={{color: 'black', fontWeight: '400'}}>
                        {item.description}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.lineStyle} />
                </TouchableOpacity>
              </Swipeable>
            ))
          ) : (
            <Text style={{color: 'black'}}>No Maintenance data available</Text>
          )}
        </View>
        <View style={styles.miniContainerView}>
          <Text style={styles.textBig}>Lost & Found Data</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.ViewAllText}>View All</Text>
            <Image source={ImagePath.nextIcon} style={styles.nextIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '20%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>Room</Text>
            </View>
            <View style={{width: '30%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>Title</Text>
            </View>
            <View style={{width: '25%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>Status</Text>
            </View>
            <View style={{width: '25%', alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontWeight: '800'}}>
                Description
              </Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
          {Array.isArray(lostandFoundData?.result) ? (
            lostandFoundData.result.map(item => (
              <View style={styles.miniContainer} key={item._id}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '20%', alignItems: 'flex-start'}}>
                    <Text style={{color: 'black', fontWeight: '400'}}>
                      {item.roomNumber}
                    </Text>
                  </View>
                  <View style={{width: '30%', alignItems: 'flex-start'}}>
                    <Text style={{color: 'black', fontWeight: '400'}}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{width: '25%', alignItems: 'flex-start'}}>
                    <Text style={{color: 'black', fontWeight: '400'}}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={{width: '25%', alignItems: 'flex-start'}}>
                    <Text style={{color: 'black', fontWeight: '400'}}>
                      {item.description}
                    </Text>
                  </View>
                </View>
                <View style={styles.lineStyle} />
              </View>
            ))
          ) : (
            <Text style={{color: 'black'}}>No Lost & Found data available</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    width: '95%',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    alignSelf: 'center',
  },
  ViewAllText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 14,
    marginRight: 10,
  },
  miniContainer: {
    justifyContent: 'space-between',
  },
  lineStyle: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginVertical: 15,
  },
  headingText: {
    marginLeft: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    marginBottom: 5,
    elevation: 1,
  },
  miniContainerView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
  },
  textBig: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
  },
  nextIcon: {
    height: 16,
    width: 16,
    marginRight: 10,
  },
  deleteButtonContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 20,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
