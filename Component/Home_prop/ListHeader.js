// ListHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListHeader = () => (
  <View style={styles.listContainer}>
    <View style={styles.listHeader}>
      <Image source={require('./list.png')} style={styles.listIcon} />
      <Text style={styles.listHeaderText}>List</Text>
    </View>
    <Text style={styles.listSubtitle}>Selesaikan Kegiatan mu</Text>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    width: 26,
    height: 20,
  },
  listHeaderText: {
    fontWeight: '700',
    marginLeft: 5,
  },
  listSubtitle: {
    fontWeight: '700',
    marginLeft: 20,
  },
});

export default ListHeader;
