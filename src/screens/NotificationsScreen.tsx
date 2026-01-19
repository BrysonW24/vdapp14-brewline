import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';

const notifications = [
  {
    id: 'note-1',
    title: 'Order ready',
    description: 'Your flat white is ready for pickup.',
    status: 'Ready',
    time: 'Just now',
  },
  {
    id: 'note-2',
    title: 'Double points',
    description: 'Earn double points between 2-4pm today.',
    status: 'Offer',
    time: '1 hour ago',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Notifications
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Updates, offers, and order status alerts.
        </Text>

        {notifications.map((note) => (
          <Card key={note.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <Text variant="titleSmall">{note.title}</Text>
                <Chip>{note.status}</Chip>
              </View>
              <Text variant="bodySmall" style={styles.mutedText}>
                {note.description}
              </Text>
              <Text variant="bodySmall" style={styles.timeText}>
                {note.time}
              </Text>
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
  mutedText: {
    color: '#6B625C',
    marginTop: 6,
  },
  timeText: {
    color: '#A38F83',
    marginTop: 8,
  },
});
