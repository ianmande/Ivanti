import React from 'react';
import {SafeAreaView, StatusBar, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {HOME} from 'navigations/routesNames';
import {colors} from 'theme/colors';
import {ShadowUtils} from 'utils/shadow';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    ...ShadowUtils.get(),
  },

  emptyText: {
    fontSize: 22,
    color: colors`colorBlack`,
    textAlign: 'center',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors`colorBasic100`,
  },
});

const EmptySearch = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.root}>
        <Text style={styles.emptyText}>Products not found</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate(HOME)}>
          <Text style={styles.addButtonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmptySearch;
