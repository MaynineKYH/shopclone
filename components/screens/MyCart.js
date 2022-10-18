import { View, Text, ScrollVIew,Image ,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLOURS, Items } from '../database/Database'
import Material from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const MyCart = ({navigation}) => {
  
  const [product, setProduct] = useState()
  const [total, setTotal] = useState(null)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',()=>{
      getDataFromDB();
    });

    return unsubscribe

  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async ()=>{
    let items = await AsyncStorage.getItem('cartItems')
    items = JSON.parse(items);
    let productData = [];
    if(items){
      Items.forEach(data=>{
        if(items.includes(data.id)){
          productData.push(data)
          return
        }
      })
      setProduct(productData)
      getTotal(productData)
    }else{
      setProduct(false)
      getTotal(false)
    }
  }

  const getTotal = (productData)=>{
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  }

  const renderProduct = (data, index)=>{
    return(
      <TouchableOpacity style={{
        width:'100%',
        height:100,
        marginVertical:6,
        flexDirection:'row',
        alignItems:'center'
      }}>
        <View style={{
          width:'30%',
          height:100,
          padding:14,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:COLOURS.backgroundLight,
          borderRadius:10,
          marginRight:22
        }}>
          <Image source={data.productImage} 
            style={{
            width:'100%',
            height:'100%',
            resizeMode:'contain'
          }}/>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{
      width:'100%',
      height:'100%',
      backgroundColor:COLOURS.white
    }}>
      <ScrollVIew>
        <View style={{
          width:'100%',
          flexDirection:'row',
          paddingTop:16,
          paddingHorizontal:16,
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Material name='chevron-left' style={{
              fontSize:18,
              color:COLOURS.backgroundDark,
              padding:12,
              backgroundColor:COLOURS.backgroundLight,
              borderRadius:12
            }} />
          </TouchableOpacity>
          <Text style={{
            fontSize:14,
            color:COLOURS.black,
            fontWeight:'400'
          }}>
            Order Detail
          </Text>
          <View>
          </View>
        </View>
        <Text style={{
          fontSize:20,
          color:COLOURS.black,
          fontWeight:'500',
          letterSpacing:20,
          paddingLeft:16,
          marginBottom:10
        }}>
          My Cart
        </Text>
        <View>
          {product ? product.map(renderProduct) : null}
        </View>
      </ScrollVIew>
    </View>
  )
}

export default MyCart