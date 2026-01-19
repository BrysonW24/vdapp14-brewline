import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentStore } from '../store/slices/storeSlice';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const featured = [
  { id: 'latte', name: 'Caramel Latte', note: 'Oat milk, extra shot' },
  { id: 'coldbrew', name: 'Cold Brew', note: 'Sweet cream' },
];

const nearby = [
  { id: 'store-1', name: 'Brewline Fitzroy', status: 'Low wait' },
  { id: 'store-2', name: 'Brewline CBD', status: 'Busy' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const [hideSuggestion, setHideSuggestion] = useState(false);
  const currentStore = useSelector((state: RootState) => {
    const activeId = state.store.currentStoreId;
    return state.store.stores.find((store) => store.id === activeId);
  });
  const smartSwitchStore = useSelector((state: RootState) => {
    const activeId = state.store.currentStoreId;
    return state.store.stores.find(
      (store) => store.id !== activeId && store.status === 'Open'
    );
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Brewline
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Order ahead, earn rewards, skip the queue.
        </Text>

        {!hideSuggestion && smartSwitchStore && currentStore?.status === 'Closed' ? (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Smart switch</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                You're closer to {smartSwitchStore.name}. Switch stores?
              </Text>
              <View style={styles.actionRow}>
                <Button
                  mode="contained"
                  onPress={() => dispatch(setCurrentStore(smartSwitchStore.id))}
                >
                  Switch now
                </Button>
                <Button mode="text" onPress={() => setHideSuggestion(true)}>
                  Keep current
                </Button>
              </View>
            </Card.Content>
          </Card>
        ) : null}

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Current store</Text>
            <Text variant="bodyMedium" style={styles.storeName}>
              {currentStore?.name || 'Select a store'}
            </Text>
            <Text variant="bodySmall" style={styles.mutedText}>
              {currentStore ? `${currentStore.suburb} • ${currentStore.eta}` : ''}
            </Text>
            <Button
              mode="outlined"
              style={styles.button}
              onPress={() => navigation.navigate('StorePicker')}
            >
              Switch store
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Order again</Text>
            <Text variant="bodySmall" style={styles.mutedText}>
              Flat white • Oat milk • 2 sugars
            </Text>
            <Button mode="contained" style={styles.button}>
              Reorder in 1 tap
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Featured this week</Text>
            {featured.map((item) => (
              <View key={item.id} style={styles.rowBetween}>
                <View>
                  <Text variant="bodyLarge">{item.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {item.note}
                  </Text>
                </View>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate('ItemDetails', {
                      id: item.id,
                      name: item.name,
                    })
                  }
                >
                  Customize
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Store status</Text>
            {nearby.map((store) => (
              <View key={store.id} style={styles.rowBetween}>
                <Text variant="bodyMedium">{store.name}</Text>
                <Chip>{store.status}</Chip>
              </View>
            ))}
            <Button mode="outlined" style={styles.button}>
              Choose pickup store
            </Button>
          </Card.Content>
        </Card>
      </View>
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
  title: {
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    color: '#6B625C',
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  mutedText: {
    color: '#6B625C',
    marginTop: 4,
  },
  storeName: {
    marginTop: 6,
    fontWeight: '600',
  },
});
