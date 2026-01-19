import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Button,
  Card,
  Chip,
  Searchbar,
  Text,
  Portal,
  Dialog,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentStore, toggleFavorite } from '../store/slices/storeSlice';
import { clearCart, setCartStore } from '../store/slices/cartSlice';

export default function StorePickerScreen() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [pendingStoreId, setPendingStoreId] = useState<string | null>(null);
  const { stores, currentStoreId } = useSelector((state: RootState) => state.store);

  const filtered = useMemo(() => {
    if (!query) return stores;
    const lower = query.toLowerCase();
    return stores.filter(
      (store) =>
        store.name.toLowerCase().includes(lower) ||
        store.suburb.toLowerCase().includes(lower)
    );
  }, [query, stores]);

  const favorites = stores.filter((store) => store.isFavorite);
  const pendingStore = stores.find((store) => store.id === pendingStoreId);

  const handleSelectStore = (storeId: string) => {
    if (storeId === currentStoreId) return;
    setPendingStoreId(storeId);
  };

  const handleConfirmSwitch = () => {
    if (pendingStoreId) {
      dispatch(clearCart());
      dispatch(setCartStore(pendingStoreId));
      dispatch(setCurrentStore(pendingStoreId));
    }
    setPendingStoreId(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Searchbar
          placeholder="Search suburb or store"
          value={query}
          onChangeText={setQuery}
          style={styles.search}
        />

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Nearby
        </Text>
        {filtered.map((store) => (
          <Card key={store.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <View>
                  <Text variant="bodyLarge">{store.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {store.suburb} • {store.eta}
                  </Text>
                </View>
                <Chip>{store.status}</Chip>
              </View>
              <View style={styles.chipRow}>
                <Chip style={styles.chip}>{store.busy} busy</Chip>
                {store.isFavorite ? <Chip style={styles.chip}>Favorite</Chip> : null}
              </View>
              <View style={styles.actionRow}>
                <Button
                  mode={store.id === currentStoreId ? 'contained' : 'outlined'}
                  onPress={() => handleSelectStore(store.id)}
                >
                  {store.id === currentStoreId ? 'Current' : 'Select'}
                </Button>
                <Button mode="text" onPress={() => dispatch(toggleFavorite(store.id))}>
                  {store.isFavorite ? 'Unstar' : 'Star'}
                </Button>
              </View>
            </Card.Content>
          </Card>
        ))}

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Favorites
        </Text>
        {favorites.length === 0 ? (
          <Text variant="bodyMedium" style={styles.mutedText}>
            Star a store to show it here.
          </Text>
        ) : (
          favorites.map((store) => (
            <Card key={store.id} style={styles.card}>
              <Card.Content>
                <Text variant="bodyLarge">{store.name}</Text>
                <Text variant="bodySmall" style={styles.mutedText}>
                  {store.suburb} • {store.eta}
                </Text>
              </Card.Content>
            </Card>
          ))
        )}
      </View>
      <Portal>
        <Dialog visible={!!pendingStoreId} onDismiss={() => setPendingStoreId(null)}>
          <Dialog.Title>Switch stores?</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Your cart is tied to the current store. Switching to {pendingStore?.name}
              will clear your cart.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setPendingStoreId(null)}>Cancel</Button>
            <Button mode="contained" onPress={handleConfirmSwitch}>
              Switch & Clear
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7EE',
  },
  content: {
    padding: 16,
  },
  search: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  card: {
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  mutedText: {
    color: '#6B625C',
    marginTop: 6,
  },
});
