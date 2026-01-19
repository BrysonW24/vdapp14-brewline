import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip, ProgressBar } from 'react-native-paper';

export default function LoyaltyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Loyalty
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Earn points every time you order.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Current tier</Text>
            <Chip style={styles.chip}>Gold</Chip>
            <Text variant="bodySmall" style={styles.mutedText}>
              120 points • 2 drinks from next reward
            </Text>
            <ProgressBar progress={0.7} color="#5C3B24" />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Rewards</Text>
            <Text variant="bodySmall" style={styles.mutedText}>
              Redeem a free coffee or 20% off food.
            </Text>
            <Button mode="contained" style={styles.button}>
              Redeem reward
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
  chip: {
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
  },
  mutedText: {
    color: '#6B625C',
    marginBottom: 12,
  },
  button: {
    alignSelf: 'flex-start',
  },
});
