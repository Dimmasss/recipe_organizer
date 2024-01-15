import React, { useState } from 'react';
import { SearchBar } from './Themed';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

type SearchBarComponentProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  colorScheme: string | null | undefined;
};

const Search: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View>
      <SearchBar
        placeholder="Search recepies, incredients, etc."
        onChangeText={updateSearch}
        value={search}
        lightColor="#eee" darkColor="rgba(255,255,255,0.1)"
        round={true}
      />
    </View>
  );
};

export default Search;