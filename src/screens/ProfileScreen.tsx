import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip, List } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Profile
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Save preferences and manage payments.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Saved preferences</Text>
            <View style={styles.chipRow}>
              <Chip style={styles.chip}>Oat milk</Chip>
              <Chip style={styles.chip}>Extra shot</Chip>
              <Chip style={styles.chip}>Medium strength</Chip>
            </View>
            <Button mode="outlined">Edit preferences</Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Payment methods</Text>
            <List.Item title="Visa •••• 4242" description="Default" />
            <Button mode="outlined">Manage payments</Button>
          </Card.Content>
        </Card>

        <Button mode="contained" icon="bell">
          Notification settings
        </Button>
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
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
});
