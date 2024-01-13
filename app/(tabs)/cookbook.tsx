import { NativeSyntheticEvent, SafeAreaView, ScrollView, StyleSheet, TextInputFocusEventData, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SetStateAction, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import Search from '../../components/Search';
// import { SearchBar } from 'react-native-screens';

export default function CookBookScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const colorScheme = useColorScheme();

  const updateSearch = (search : any) => {
    setSearch(search.nativeEvent.text);
  };

  return (
      <SafeAreaView style={{ flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <View>
              <Search 
                  search={search}
                  setSearch={setSearch}
                  colorScheme={colorScheme}
              />
                  {/* <Welcome 
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      handleClick= {() => {
                          if (searchTerm) {
                              router.push(`/search/${searchTerm}`);
                          }
                      }}
                  />
                  <Popularjobs />
                  <Nearbyjobs /> */}
              </View>
          </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
