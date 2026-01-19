import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, Switch, Divider, Text, Button } from 'react-native-paper';

export default function SettingsScreen() {
  const [readyAlerts, setReadyAlerts] = useState(true);
  const [promoAlerts, setPromoAlerts] = useState(true);
  const [receiptEmails, setReceiptEmails] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Settings
      </Text>

      <List.Item
        title="Order ready alerts"
        description="Notify when your drink is ready"
        left={(props) => <List.Icon {...props} icon="coffee" />}
        right={() => (
          <Switch value={readyAlerts} onValueChange={setReadyAlerts} />
        )}
      />
      <Divider />
      <List.Item
        title="Promotions"
        description="Receive personalised offers"
        left={(props) => <List.Icon {...props} icon="sale" />}
        right={() => (
          <Switch value={promoAlerts} onValueChange={setPromoAlerts} />
        )}
      />
      <Divider />
      <List.Item
        title="Email receipts"
        description="Send receipts to your email"
        left={(props) => <List.Icon {...props} icon="email" />}
        right={() => (
          <Switch value={receiptEmails} onValueChange={setReceiptEmails} />
        )}
      />
      <Divider />

      <Button mode="contained" style={styles.button}>
        Update account
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7EE',
    padding: 16,
  },
  title: {
    fontWeight: '700',
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
  },
});
