/**
 * @format
 */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {COLLECTIONS} from 'navigations/routesNames';
import {colors} from 'theme/colors';

interface ListHeadProps {
  title: string;
  collectionId: string;
}
const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 18},
  title: {fontSize: 24, color: colors`colorBlack`, fontWeight: 'bold'},
  viewText: {color: colors`colorSpanishGray`},
});

export const ListHead = ({title, collectionId}: ListHeadProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(COLLECTIONS, {collectionId})}>
        <Text style={styles.viewText}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};
