function isPaid(order) {
  return order.payment.status === "paid";
}

function hasShipped(order) {
  return order.shipping.status === "shipped";
}

function getDeliveryMessage(order) {
  if (!hasShipped(order)) {
    return "Order has not shipped yet.";
  }

  return `Order has been shipped and estimated arrival is on ${order.shipping.estimatedDelivery}`;
}

function needsAttention(order) {
  return (!isPaid(order)) || (!hasShipped(order));
}

function createOrderSummary(order) {
  const id = order.id;
  const customerName = order.customer.name;
  const paid = isPaid(order);
  const shipped = hasShipped(order);
  let itemCount = 0;
  const message = getDeliveryMessage(order);

  for (const item of order.items) {
    itemCount += item.quantity;
  }

  return {
    id,
    customerName,
    paid,
    shipped,
    itemCount,
    message,
    needsAttention: needsAttention(order)
  }
}

const order = {
  id: 'ORD-1001',
  customer: {
    name: 'Ava Stone',
    email: 'ava@example.com',
  },
  payment: {
    status: 'paid',
  },
  shipping: {
    status: 'shipped',
    estimatedDelivery: '2026-06-18',
  },
  items: [
    { name: 'Notebook', quantity: 2 },
    { name: 'Pen Set', quantity: 1 },
  ],
};

console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));

const pendingOrder = {
  ...order,
  payment: { status: 'unpaid' },
  shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};
console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));
