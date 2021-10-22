import * as React from 'react';
import { useEffect, useState } from 'react';
import { View,Text,ActivityIndicator} from 'react-native';

export const Present = ({route}) =>{
    const { itemId, otherParam } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getMovies = async () => {
        try {
         const response = await fetch(`http://giftcity.kz/api/v1/present/${JSON.stringify(itemId)}`);
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
  return(
    <View style={{backgroundColor:'white'}}>
   {isLoading ? <ActivityIndicator/> : (
       <View style={{padding: 30}}>
    <Text style={{marginTop:20}} >{data.id}</Text>
    <Text>{data.name_precent}</Text>
    </View>
    )}
    </View>
  );
};