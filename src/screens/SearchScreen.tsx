import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Searchbar, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MENU_ITEMS = [
  { id: 'flat-white', name: 'Flat White', category: 'Coffee', price: '$4.80' },
  { id: 'cappuccino', name: 'Cappuccino', category: 'Coffee', price: '$4.90' },
  { id: 'cold-brew', name: 'Cold Brew', category: 'Cold', price: '$5.20' },
  { id: 'banana-bread', name: 'Banana Bread', category: 'Food', price: '$4.50' },
];

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = MENU_ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayData = searchQuery ? filteredData : MENU_ITEMS;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search menu items..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <FlatList
        data={displayData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          searchQuery === '' ? (
            <View style={styles.header}>
              <Text variant="titleLarge">Menu</Text>
              <Text variant="bodyMedium" style={styles.mutedText}>
                Customize drinks, save favourites, reorder fast.
              </Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.name}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                {item.category} • {item.price}
              </Text>
              <View style={styles.tagRow}>
                <Chip style={styles.tagChip}>Popular</Chip>
                <Chip style={styles.tagChip}>Pickup 8 min</Chip>
              </View>
              <Button
                mode="contained"
                onPress={() =>
                  navigation.navigate('ItemDetails', {
                    id: item.id,
                    name: item.name,
                  })
                }
              >
                Customize
              </Button>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text variant="titleLarge">No Results</Text>
            <Text variant="bodyMedium">
              No items match your search.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7EE',
  },
  searchbar: {
    margin: 16,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
  header: {
    marginBottom: 12,
  },
  mutedText: {
    color: '#6B625C',
    marginTop: 4,
  },
  tagRow: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tagChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});
