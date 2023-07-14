import React, {useState, useRef, useCallback} from 'react';
import {View, TouchableOpacity, TextInput, Animated, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SearchIcon from 'assets/icons/SearchIcon';
import CloseIcon from 'assets/icons/Close';

import {colors} from 'theme/colors';
import {SEARCH} from 'navigations/routesNames';

const SearchBar: React.FC = () => {
  const navigation = useNavigation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;

  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);

    Animated.timing(animationValue, {
      toValue: isSearchOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animationValue, isSearchOpen]);

  const handleSubmit = (event: {nativeEvent: {text: string}}) => {
    const {text} = event.nativeEvent;

    navigation.navigate(SEARCH, {searchTerm: text});
  };

  const barWidth = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '80%'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearchToggle}>
        {isSearchOpen ? (
          <CloseIcon width={24} height={24} color="black" />
        ) : (
          <SearchIcon width={24} height={24} color="black" />
        )}
      </TouchableOpacity>

      <Animated.View style={[styles.searchBar, {width: barWidth, paddingHorizontal: isSearchOpen ? 12 : 0}]}>
        <TextInput style={styles.input} placeholder="Search" autoFocus onSubmitEditing={handleSubmit} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 16,
    backgroundColor: colors`colorBasic100`,
  },
  searchBar: {
    backgroundColor: colors`colorBrightGray`,
    borderRadius: 5,
    height: 40,
    overflow: 'hidden',
    justifyContent: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
