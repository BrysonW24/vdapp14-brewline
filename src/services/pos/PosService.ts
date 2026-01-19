export type PosOrder = {
  id: string;
  name: string;
  customer: string;
  status: 'New' | 'In progress' | 'Ready' | 'Completed';
};

const queue: PosOrder[] = [
  { id: 'q-1', name: 'Flat White', customer: 'Maya T', status: 'New' },
  { id: 'q-2', name: 'Oat Latte', customer: 'Nick Z', status: 'In progress' },
];

export function fetchQueue() {
  return Promise.resolve(queue);
}

export function updateOrderStatus(id: string, status: PosOrder['status']) {
  const order = queue.find((item) => item.id === id);
  if (order) {
    order.status = status;
  }
  return Promise.resolve(order);
}
