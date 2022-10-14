import { View, Text, StatusBar,Image,Animated,Dimensions ,ScrollView,FlatList, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { COLOURS, Items } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionic from 'react-native-vector-icons/Ionicons'

const ProductInfo = ({route}) => {
  const {productID} = route.params;
  const [product, setProduct] = useState({});
  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);
  
  let position = Animated.divide(scrollX,width);

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',()=>{
      getDataFromDB()
    });
    return unsubscribe;
  },[navigation]);

  //get product data by productID
  const getDataFromDB = async()=>{
    for(let index=0; index < Items.length; index++){
      if(Items[index].id == productID){
        await setProduct(Items[index])
        return;
1      }
    }
  }
  
  //product horizontal scroll product card
  const renderProduct = ({item, index})=>{
    return(
      <View style={{
        width:width,
        height:240,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Image source={item} style={{
          width:'100%',
          height:'100%',
          resizeMode:'contain'
        }}/>
      </View>
    )
  }



  return (
    <View>
      <Text style={{
        width:'100%',
        height:'100%',
        backgroundColor:COLOURS.white,
        position:'relative'
      }}>
        <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle={'dark-content'}/>
        <ScrollView style={{
          width:'100%',
          backgroundColor:COLOURS.backgroundLight,
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20,
          position:'relative',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:4
        }}>
          <View style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingTop:16,
            paddingLeft:16
          }}>
            <View>
              <TouchableOpacity>
                <Entypo name='chevron-left' style={{
                  fontSize:18,
                  color:COLOURS.backgroundDark,
                  padding:12,
                  backgroundColor:COLOURS.white,
                  borderRadius:10
                }}/>
              </TouchableOpacity>
            </View>
            <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset:{x:scrollX}}}],
              {useNativeDriver:false}
            )}
            renderItem={renderProduct} snapToInterval={width} decelerationRate={0.8} showsHorizontalScrollIndicator={false}/>
            <View style={{
              width:'100%',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              marginBottom:16,
              marginTop:32
            }}>
              {
                product.productImageList ?
                product.productImageList.map((data,index)=>{
                  let opacity = position.interpolate({
                    inputRange: [index -1 , index, index +1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate:'clamp'
                    
                  })
                  return(
                    <Animated.View key={index} style={{
                      width:'16%',
                      height:2.4,
                      backgroundColor:COLOURS.black,
                      opacity,
                      marginHorizontal:4,
                      borderRadius:100
                    }}>
                    </Animated.View>
                  )
                }) : null
              }
            </View>
          </View>
          <View style={{
            paddingHorizontal:16,
            marginTop:6
          }}>
            <View style={{
              flexDirection:'row',
              alignItems:'center',
              marginVertical:14
            }}>
              <Entypo name="shopping-cart"
              style={{
                fontSize:18,
                color:COLOURS.blue,
                marginRight:6
              }}/>
              <Text style={{
                fontSize:12,
                color:COLOURS.black
              }}>
                Shopping
              </Text>
            </View>
            <View style={{
              flexDirection:'row',
              marginVertical:4,
              alignItems:'center',
              justifyContent:'space-between'
            }}>
              <Text style={{
                fontSize:24,
                fontWeight:'600',
                letterSpacing:0.5,
                marginVertical:4,
                color:COLOURS.black,
                maxWidth:'84%'
              }}>
                {product.productName}
              </Text>
              <Ionic name='link-outline' style={{
                fontSize:24,
                color:COLOURS.blue,
                marginRight:6,
                backgroundColor:COLOURS.blue + 10,
                padding:8,
                borderRadius:100
              }}/>
            </View>
            <Text style={{
              fontSize:12,
              color:COLOURS.black,
              fontWeight:'400',
              letterSpacing:1,
              opacity:0.5,
              lineHeight:20,
              maxWidth:'85%',
              maxHeight:44,
              marginBottom:18
            }}>
              {product.description}
            </Text>
            <View>
              <View>
                <View style={{
                  color:COLOURS.blue,
                  backgroundColor:COLOURS.backgroundLight,
                  alignItems:'center',
                  justifyContent:'center',
                  padding:12,
                  borderRadius:100,
                  marginRight:10
                }}>
                  <Entypo name="location-pin" style={{
                    fontSize:16, color:COLOURS.blue
                  }}/>
                </View>
                <Text>Seoul gangnam 12,{'\n'} 12:00 ~ 18:30</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Text>
    </View>
  )
}

export default ProductInfo