import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';

const insights = [
  { id: 'ins-1', label: 'Peak hour', value: '8:00 - 9:30 AM' },
  { id: 'ins-2', label: 'Top item', value: 'Oat Latte' },
  { id: 'ins-3', label: 'Repeat rate', value: '42% weekly' },
];

export default function AdminDashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Admin Dashboard
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Manage menu, promotions, and LLM insights.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Menu management</Text>
            <Text variant="bodySmall" style={styles.mutedText}>
              Update items, pricing, and availability.
            </Text>
            <Button mode="contained" style={styles.button}>
              Edit menu
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Promotions</Text>
            <View style={styles.chipRow}>
              <Chip style={styles.chip}>Double points</Chip>
              <Chip style={styles.chip}>Happy hour 2-4pm</Chip>
            </View>
            <Button mode="outlined" style={styles.button}>
              Create promo
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">LLM insights</Text>
            {insights.map((insight) => (
              <View key={insight.id} style={styles.rowBetween}>
                <Text variant="bodySmall" style={styles.mutedText}>
                  {insight.label}
                </Text>
                <Text variant="bodyMedium">{insight.value}</Text>
              </View>
            ))}
            <Button mode="text" style={styles.button}>
              Generate daily summary
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
  mutedText: {
    color: '#6B625C',
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});
