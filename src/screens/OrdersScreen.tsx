import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { clearCart, removeItem, updateItemQuantity } from '../store/slices/cartSlice';
import { earnPoints } from '../store/slices/loyaltySlice';

const activeOrders = [
  { id: 'ord-1', item: 'Flat White', status: 'In progress', eta: '5 min' },
];

const history = [
  { id: 'ord-2', item: 'Cappuccino', status: 'Completed', date: 'Yesterday' },
  { id: 'ord-3', item: 'Cold Brew', status: 'Completed', date: 'Mon' },
];

export default function OrdersScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const cartTotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
            <Text variant="titleMedium">Current cart</Text>
            {cart.items.length === 0 ? (
              <Text variant="bodySmall" style={styles.mutedText}>
                Your cart is empty.
              </Text>
            ) : (
              cart.items.map((item) => (
                <View key={item.id} style={styles.cartRow}>
                  <View style={styles.cartInfo}>
                    <Text variant="bodyLarge">{item.name}</Text>
                    <Text variant="bodySmall" style={styles.mutedText}>
                      ${item.price.toFixed(2)} • Qty {item.quantity}
                    </Text>
                  </View>
                  <View style={styles.cartActions}>
                    <Button
                      mode="text"
                      onPress={() =>
                        dispatch(
                          updateItemQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                    >
                      -
                    </Button>
                    <Button
                      mode="text"
                      onPress={() =>
                        dispatch(
                          updateItemQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </Button>
                    <Button mode="text" onPress={() => dispatch(removeItem(item.id))}>
                      Remove
                    </Button>
                  </View>
                </View>
              ))
            )}
            <View style={styles.cartTotalRow}>
              <Text variant="bodyLarge">Total</Text>
              <Text variant="bodyLarge">${cartTotal.toFixed(2)}</Text>
            </View>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => {
                if (cart.items.length === 0) return;
                dispatch(earnPoints(Math.round(cartTotal)));
                dispatch(clearCart());
              }}
            >
              Checkout
            </Button>
            {cart.items.length > 0 ? (
              <Button mode="text" onPress={() => dispatch(clearCart())}>
                Clear cart
              </Button>
            ) : null}
          </Card.Content>
        </Card>

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
  cartRow: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E6DDD6',
  },
  cartInfo: {
    marginBottom: 8,
  },
  cartActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartTotalRow: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
