import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMaintenanceDetails} from '../redux/maintenance/action';
import {getLostAndFoundDetails} from '../redux/lostAndFound/action';
import {ImagePath} from '../assets/images/imagePath';

const Home = () => {
  const dispatch = useDispatch();

  const {maintenanceData} = useSelector(state => state.maintenanceReducer);
  const {lostandFoundData} = useSelector(state => state.lostAndFoundReducer);

  useEffect(() => {
    dispatch(getMaintenanceDetails());
    dispatch(getLostAndFoundDetails());
  }, [dispatch]);

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
            <Image
              source={ImagePath.nextIcon}
              style={styles.nextIcon}
            />
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
          {maintenanceData?.result?.map(item => (
            <View style={styles.miniContainer} key={item._id}>
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
            </View>
          ))}
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
          {lostandFoundData?.result?.map(item => (
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
                <View style={{width: '20%', alignItems: 'flex-start'}}>
                  <Text style={{color: 'black', fontWeight: '400'}}>
                    {item.status}
                  </Text>
                </View>
                <View style={{width: '30%', alignItems: 'center'}}>
                  <Text style={{color: 'black', fontWeight: '400'}}>
                    {item.description}
                  </Text>
                </View>
              </View>
              <View style={styles.lineStyle} />
            </View>
          ))}
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
  container: {
    flexDirection: 'row',
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
    marginBottom:5,
    elevation:1
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
});
