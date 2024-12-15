const discountAmount = "How much discount do you want?";
const invalidEntry = "Invalid Entry";
const maxDiscount = 100;
const minDiscount = 0;

const productPrice = [
  { product: "Tişört", price: 350 },
  { product: "Kazak", price: 570 },
  { product: "Ayakkabı", price: 1500 },
  { product: "Pantolon", price: 650 }
];

const discount = prompt(discountAmount);

if (discount) {

  if (!isNaN(discount) && Number(discount) <= maxDiscount && Number(discount) >= minDiscount) {

    for (let i = 0; i < productPrice.length; i++) {
      productPrice[i].price = 
      productPrice[i].price - (productPrice[i].price * (Number(discount) / 100));
    }

    console.log(productPrice);

  } else {
    alert(invalidEntry);
  }

} else {
  alert(invalidEntry);
}