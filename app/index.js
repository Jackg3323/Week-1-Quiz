/**
 * TODO: Assign your own values to meet the conditions below:

 * 6. Log a new message that prints either 'true' or 'false' to the screen depending on whether or not the customer spent over $100. Use conditional operators to accomplish this. Don't worry about the '$' symbol. Just use the number 100.
 *
 * 7. Update `product` to reflect the new quantity. In other words, the new quantity value should be 7 less than whatever you initialized it with.
 */

// Q1
const customer = {
  firstName: "Jack",
  lastName: "Guthrie",
  id: 1,
  phoneNumber: "123456",
  Email: "test@google.com",
};

// Q2
const address = {
  street: "test lane",
  city: "test city",
  state: "test state",
  zipCode: "test zip",
};

customer.address = address;

// Q3
console.log(`Welcome, ${customer.firstName} ${customer.lastName}!`);

// Q4
const product = {
  name: "testProduct",
  price: 10,
  description: "test description",
  quantity: 10,
};

// Q5

console.log(`Total: ${7 * product.price}`);

// Q6
if (product.quantity * product.price < 100) {
  console.log("false");
} else {
  console.log("true");
}

// Q7

product.quantity -= 7;
console.log(product.quantity);
