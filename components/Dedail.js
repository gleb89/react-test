import * as React from 'react';
import { useEffect, useState } from 'react';
import { View,Button,Image,ActivityIndicator, FlatList, Text ,StyleSheet} from 'react-native';





export const DetailsScreen = ({ navigation }) =>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
       try {
        const response = await fetch('http://giftcity.kz/api/v1/present/');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, []);
    return (
      <View style={{ flex: 1, padding: 24 ,backgroundColor:'white'}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ flex: 1, padding: 24 }}>

              <Image
              style={styles.img}
              source={{
                uri: item.image_precent,
              }}
            />
            <Text style={styles.name}>{item.prevue_name}</Text>
              
              <View style={{ flex: 1,marginTop:20  }}>
              
              <Text style={{fontSize:18}}><Text style={{fontWeight:'bold',fontSize:14}}>Цена: </Text > {item.price} тг</Text>
              <View style={{padding:50}}>
                <Button
                color="orange"
        title="подробнее"
        onPress={() =>
          navigation.push('Present', {
            itemId: item.id,
          })
        }
      />
                </View>
              </View>
              </View>
            )}
          />
        )}
      </View>
    );
  };


  const styles = StyleSheet.create({
    img: {
      height: 259,
      width: 305
    },
    name: {
        fontWeight: 'bold',
        marginTop:40,
        textAlign: 'center',
        fontSize:20
    }
  })