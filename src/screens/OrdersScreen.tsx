import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';

const activeOrders = [
  { id: 'ord-1', item: 'Flat White', status: 'In progress', eta: '5 min' },
];

const history = [
  { id: 'ord-2', item: 'Cappuccino', status: 'Completed', date: 'Yesterday' },
  { id: 'ord-3', item: 'Cold Brew', status: 'Completed', date: 'Mon' },
];

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Orders
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Track live orders and past receipts.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Active order</Text>
            {activeOrders.map((order) => (
              <View key={order.id} style={styles.rowBetween}>
                <View>
                  <Text variant="bodyLarge">{order.item}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    ETA {order.eta}
                  </Text>
                </View>
                <Chip>{order.status}</Chip>
              </View>
            ))}
            <Button mode="outlined" style={styles.button}>
              View status
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Order history</Text>
            {history.map((order) => (
              <View key={order.id} style={styles.rowBetween}>
                <View>
                  <Text variant="bodyLarge">{order.item}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {order.date}
                  </Text>
                </View>
                <Chip>{order.status}</Chip>
              </View>
            ))}
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  mutedText: {
    color: '#6B625C',
    marginTop: 4,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
});
