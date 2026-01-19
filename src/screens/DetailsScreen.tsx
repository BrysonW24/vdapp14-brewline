import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Card, Text, Chip, Button } from 'react-native-paper';
import { RootStackParamList } from '../navigation/types';

type RouteProps = RouteProp<RootStackParamList, 'ItemDetails'>;

const sizes = ['Small', 'Regular', 'Large'];
const milks = ['Full cream', 'Skim', 'Oat', 'Almond'];
const extras = ['Extra shot', 'Vanilla', 'Caramel'];

export default function DetailsScreen() {
  const route = useRoute<RouteProps>();
  const { name } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          {name}
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Customize your drink exactly how you like it.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Size</Text>
            <View style={styles.chipRow}>
              {sizes.map((size) => (
                <Chip key={size} style={styles.chip}>
                  {size}
                </Chip>
              ))}
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Milk</Text>
            <View style={styles.chipRow}>
              {milks.map((milk) => (
                <Chip key={milk} style={styles.chip}>
                  {milk}
                </Chip>
              ))}
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Extras</Text>
            <View style={styles.chipRow}>
              {extras.map((extra) => (
                <Chip key={extra} style={styles.chip}>
                  {extra}
                </Chip>
              ))}
            </View>
          </Card.Content>
        </Card>

        <Button mode="contained" style={styles.ctaButton}>
          Add to order
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
    marginTop: 12,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  ctaButton: {
    marginBottom: 24,
  },
});
