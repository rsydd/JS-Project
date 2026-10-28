function calculateTotal(expenses) {
  let totalAmount = 0;

  for (const expense of expenses) {
    totalAmount += expense.amount;
  }

  return totalAmount;
}

function calculateCategoryTotal(expenses, category) {
  let totalCategory = 0;

  for (const expense of expenses) {
    if (expense.category === category) {
      totalCategory += expense.amount;
    }
  }

  return totalCategory;
}

function findLargestExpense(expenses) {
  if (expenses.length === 0) {
    return null;
  }

  let largestExpense = expenses[0];

  for (const expense of expenses) {
    if (expenses.amount > largestExpense.amount) {
      largestExpense = expense;
    }
  }

  return largestExpense;
}

function createExpenseSummary(expenses) {
  const total = calculateTotal(expenses);
  const foodTotal = calculateCategoryTotal(expenses, 'food');
  const transportTotal = calculateCategoryTotal(expenses, 'transport');
  const largestExpense = findLargestExpense(expenses);

  return {
    total,
    foodTotal,
    transportTotal,
    largestExpense
  };
}


const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));
