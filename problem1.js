class Product {
  static productCount = 0;
  constructor(name, price) {
    Product.productCount += 1;
    this.id = Product.productCount;
    this.name = name;
    this.price = price;
  }

  totalPrice() {
    return this.price;
  }
}

class CareProduct extends Product {
  constructor(name, price, warrantyPeriod) {
    super(name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  totalPrice() {
    const discountRates = { 5: 0.1, 4: 0.2, 3: 0.3, 2: 0.4, 1: 0.5 };
    const discount = discountRates[this.warrantyPeriod] || 0;
    return this.price * (1 - discount);
  }
}

const product1 = new Product("Laptop", 1200);
const product2 = new CareProduct("Smartphone", 1000, 3);

console.log(`${product1.name} total price: $${product1.totalPrice()}`);
console.log(`${product2.name} total price: $${product2.totalPrice()}`);
