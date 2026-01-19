import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';
import { fetchQueue, updateOrderStatus, PosOrder } from '../services/pos/PosService';

export default function PosQueueScreen() {
  const [queue, setQueue] = useState<PosOrder[]>([]);

  useEffect(() => {
    fetchQueue().then(setQueue);
  }, []);

  const updateStatus = (id: string, status: string) => {
    updateOrderStatus(id, status as PosOrder['status']).then(() => {
      setQueue((prev) =>
        prev.map((order) => (order.id === id ? { ...order, status } : order))
      );
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          POS Queue
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Stubbed order flow for in-store staff.
        </Text>

        {queue.map((order) => (
          <Card key={order.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <View>
                  <Text variant="titleMedium">{order.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {order.customer}
                  </Text>
                </View>
                <Chip>{order.status}</Chip>
              </View>
              <View style={styles.actionRow}>
                <Button mode="outlined" onPress={() => updateStatus(order.id, 'In progress')}>
                  Start
                </Button>
                <Button mode="outlined" onPress={() => updateStatus(order.id, 'Ready')}>
                  Ready
                </Button>
                <Button mode="text" onPress={() => updateStatus(order.id, 'Completed')}>
                  Complete
                </Button>
              </View>
            </Card.Content>
          </Card>
        ))}
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
});
