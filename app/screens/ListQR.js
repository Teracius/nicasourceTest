import React,{useState,useEffect} from 'react'
import { SafeAreaView, View,Dimensions,FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { SearchInput } from '../components/SearchInput';
import { useSelector} from 'react-redux';

export const ListQR = () => {

  const screenWidht = Dimensions.get("window").width
  const {strings} = useSelector(state => state.counter)
  const [stringsFilter, setStringsFilter] = useState([])
  const [term, setTerm] = useState("")


  useEffect(() => {
    if(term.length===0){
        return setStringsFilter([]);
    }
        const search= strings.find(stringSearched=> stringSearched===term)
        setStringsFilter(
        (search) ? [search] : []
       ) 
    
}, [term])
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.titleSearch}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  return (
   <SafeAreaView style={styles.container}>
     
     <SearchInput 
            onDebounce={(value)=>setTerm(value)}
            style={{
                width:screenWidht - 40,
                marginVertical:10
            }}
            />
     <View style={{width:"90%",height:200,}}>
      <Text style={{alignSelf:"center",marginVertical:10,fontSize:20}}>Filter area</Text>
      <FlatList
        data={stringsFilter}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={(
          <Text style={{
              ...styles.title,
              ...styles.globalMaring,
              // top: top + 20,
              // marginBottom: top + 20,
              paddingBottom: 10,
              // marginTop: (Platform.OS =="ios") ? top+60:top+80
          
          }}>
              {term}
              </Text>
        )}
          
      />

      </View>
      <View style={{ width:"90%",height:500,}}>
      <Text style={{alignSelf:"center",marginVertical:10,fontSize:20}}>Scanned elements</Text>

<FlatList
        data={strings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
        />

        </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
  },
  item: {
    backgroundColor: '#99ffbb',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title:{
    fontSize:28,
    fontWeight: "bold"
},
titleSearch:{
  fontSize:15,

},
globalMaring:{
  marginHorizontal:20
      },
});
