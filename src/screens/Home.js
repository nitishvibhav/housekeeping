import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteMaintenanceDetails,
  getMaintenanceDetails,
} from '../redux/maintenance/action';
import {
  deleteLostAndFoundDetails,
  getLostAndFoundDetails,
} from '../redux/lostAndFound/action';
import {ImagePath} from '../assets/images/imagePath';
import {get} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import CustomDataTable from '../components/CustomDataTable';
import { getServiceTicketingDetails } from '../redux/serviceTicketing/action';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {maintenanceData} = useSelector(state => state.maintenanceReducer);
  const {lostandFoundData} = useSelector(state => state.lostAndFoundReducer);
  const {serviceTicket} = useSelector(state => state.serviceTicketingReducer);

  const handleDelete = async (type, item, rowIndex) => {
    const id = item._id;
    try {
      let res;
      if (type === 'maintenance') {
        res = await dispatch(deleteMaintenanceDetails(id));
      } else if (type === 'lostAndFound') {
        res = await dispatch(deleteLostAndFoundDetails(id));
      }

      const status = get(res, 'value.status', res.status);
      if (status === 200) {
        Alert.alert('Success', 'Data deleted successfully.');
        if (type === 'maintenance') {
          dispatch(getMaintenanceDetails());
        } else if (type === 'lostAndFound') {
          dispatch(getLostAndFoundDetails());
        }
      } else {
        console.error('Failed response data:', res);
        Alert.alert('Error', 'Failed to delete data.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while deleting data.');
    }
  };

  const handleEdit = (item, rowIndex) => {
    // Implement your edit logic here
    console.log('Edit item:', item, rowIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getMaintenanceDetails());
        await dispatch(getLostAndFoundDetails());
        await dispatch(getServiceTicketingDetails())
      } catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert('Error', 'Failed to fetch data.');
      }
    };

    fetchData();
  }, [dispatch]);

  const [MaintenanceData, setMaintenanceData] = useState([]);
  const [LostAndFoundData, setLostAndFoundData] = useState([]);
  const [serviceTicketingData, setServiceTicketingData] = useState([]);

  useEffect(() => {
    if (maintenanceData.result) {
      setMaintenanceData(maintenanceData.result);
    }
    if (lostandFoundData.result) {
      setLostAndFoundData(lostandFoundData.result);
    }
    if (serviceTicket.result) {
      setServiceTicketingData(serviceTicket.result);
    }
  }, [
    maintenanceData.result,
    lostandFoundData.result,
    serviceTicket.result,
  ]);

  const maintenanceColumns = [
    {label: 'Department', field: 'category', numeric: false},
    {label: 'Status', field: 'status', numeric: false},
    {label: 'Description', field: 'description', numeric: false},
  ];

  const lostAndFoundColumns = [
    {label: 'Room', field: 'roomNumber', numeric: false},
    {label: 'Title', field: 'title', numeric: false},
    {label: 'Status', field: 'status', numeric: false},
    {label: 'Description', field: 'description', numeric: false},
  ];

  const serviceTicketingColumns = [
    {label: 'Room ', field: 'roomNumber', numeric: false},
    {label: 'Category', field: 'ticketCategory', numeric: false},
    {label: 'Status', field: 'ticketStatus', numeric: false},
  ];

  const handleRowPress = (row) => {
    navigation.navigate('Cleaning', { item: row });
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
        <CustomDataTable
          columns={serviceTicketingColumns}
          data={serviceTicketingData}
          title="Service Ticketing Data"
          onRowPress={handleRowPress} 
          onEdit={handleEdit}
          onDelete={(item, rowIndex) => handleDelete('serviceTicketing', item, rowIndex)}
        />
        <CustomDataTable
          columns={maintenanceColumns}
          data={MaintenanceData}
          title="Maintenance Data"
          onRowPress={handleRowPress}
          onEdit={handleEdit}
          onDelete={(item, rowIndex) => handleDelete('maintenance', item, rowIndex)}
        />
        <CustomDataTable
          columns={lostAndFoundColumns}
          data={LostAndFoundData}
          title="Lost and Found Data"
          onRowPress={handleRowPress}
          onEdit={handleEdit}
          onDelete={(item, rowIndex) => handleDelete('lostAndFound', item, rowIndex)}
        />
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
