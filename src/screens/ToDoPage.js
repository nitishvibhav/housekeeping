import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';

const ToDoPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = React.useState(null);
  const [modalVisible1, setModalVisible1] = useState(false);

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        setPhoto(source);
      }
    });
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Cleaning</Text>
        <Text style={styles.text}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
        <Text style={styles.dangerText}>
          Clean Window with special attention
        </Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setModalVisible(true)}>
          <Image
            source={require('../../assets/images/comment.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={openCamera}>
          <Image
            source={require('../../assets/images/camera.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setModalVisible1(true)}>
          <Image
            source={require('../../assets/images/clipboard.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      {photo && (
        <View style={styles.div}>
          <Image source={photo} style={styles.photo} />
          <Text>{setComment}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.btnsubmitt}>
        <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 800}}>
          SUBMIT
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1}}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              bottom: 0,
              position: 'absolute',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'black',
                }}>
                Add notes
              </Text>
              <TouchableOpacity
                style={{
                  marginRight: 20,
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={{borderRadius: 50, height: 20, width: 20}}
                  source={require('../../assets/images/cross.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                placeholder="Add comment"
                style={styles.placeholder}
                numberOfLines={5}
                multiline
                textAlignVertical="top"
                value={comment}
                onChangeText={setComment}
              />
              {console.log(setComment)}
            </View>
            <TouchableOpacity
              style={{
                width: '90%',
                alignSelf: 'center',
                backgroundColor: 'black',
                height: 50,
                borderColor: '#e4e4e4',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 30,
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 800}}>
                Save & Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1}}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              bottom: 0,
              position: 'absolute',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'black',
                }}>
                Mark your task
              </Text>
              <TouchableOpacity
                style={{
                  marginRight: 20,
                }}
                onPress={() => setModalVisible1(!modalVisible1)}>
                <Image
                  style={{borderRadius: 50, height: 20, width: 20}}
                  source={require('../../assets/images/cross.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginLeft:20, flexDirection:'row', alignItems:'center', marginTop:20}}>
              <Image
                source={require('../../assets/images/checkbox.png')}
                style={{height: 20, width: 20, marginRight:10}}
              />
              <Text style={{fontSize:15, fontWeight:'800', color:'black'}}>Cleaning the floor</Text>
            </View>
            <View style={{marginLeft:20, flexDirection:'row', alignItems:'center', marginTop:20}}>
            <Image
              source={require('../../assets/images/checkbox.png')}
              style={{height: 20, width: 20, marginRight:10}}
            />
            <Text style={{fontSize:15, fontWeight:'800', color:'black'}}>Change Linen</Text>
          </View>
          <View style={{marginLeft:20, flexDirection:'row', alignItems:'center', marginTop:20}}>
          <Image
            source={require('../../assets/images/checkbox.png')}
            style={{height: 20, width: 20, marginRight:10}}
          />
          <Text style={{fontSize:15, fontWeight:'800', color:'black'}}>Puff the pillow</Text>
        </View>
        <View style={{marginLeft:20, flexDirection:'row', alignItems:'center', marginTop:20}}>
        <Image
          source={require('../../assets/images/checkbox.png')}
          style={{height: 20, width: 20, marginRight:10}}
        />
        <Text style={{fontSize:15, fontWeight:'800', color:'black'}}>Clean bathroom</Text>
      </View>
            <TouchableOpacity
              style={{
                width: '90%',
                alignSelf: 'center',
                backgroundColor: 'black',
                height: 50,
                borderColor: '#e4e4e4',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 30,
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 800}}>
                Save & Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ToDoPage;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
  },
  text: {
    fontSize: 13,
    color: 'gray',
    marginVertical: 6,
  },
  dangerText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '800',
  },
  container2: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  touch: {
    backgroundColor: 'white',
    width: '32%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  img: {
    height: 50,
    width: 50,
  },
  btnsubmitt: {
    bottom: 0,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingVertical: 12,
    borderColor: '#e4e4e4',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    bottom: 0,
    position: 'absolute',
    width: '95%',
    alignSelf: 'center',
  },
  buttonClose: {
    backgroundColor: '#F194FF',
    marginTop: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  placeholder: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 6,
    padding: 10,
  },
  photo: {
    width: 150,
    height: 150,
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 6,
  },
  div: {
    width: '95%',
    backgroundColor: 'white',
    alignSelf:'center',
    borderRadius:6
  },
});
