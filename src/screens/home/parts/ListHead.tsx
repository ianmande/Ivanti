/**
 * @format
 */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';

interface ListHeadProps {
  title: string;
}
const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 18},
  title: {fontSize: 24, color: colors`colorBlack`, fontWeight: 'bold'},
});

export const ListHead = ({title}: ListHeadProps) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
};
