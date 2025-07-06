// Task #1
interface ITotalPriceArgs {
  price: number,
  discount: number,
  isInstallment: boolean,
  months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPriceArgs): number => {
  // Your code here...
  return 0
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250