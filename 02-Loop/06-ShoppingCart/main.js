const shoppingCart = {}

do {
    productName = prompt('Product name')
    amount = +prompt('How many amount of product')
    price = +prompt('How much')
    discount = +prompt('How many discount')
    if (productName == null || productName.trim() == "") {
        break
    }else {
        shoppingCart.itemName = productName;
    }if (amount == null || amount.trim == "") {
        break
    }else {
        shoppingCart.amountProduct = amount;
    }if (price == null || price.trim == "") {
        break
    }else {
        shoppingCart.priceProduct = price;
    }if (discount == null || discount.trim == "" || discount == 0) {
        break
    }else {
        shoppingCart.discountion = discount;
    }
} while(false);

console.log(shoppingCart)

let realPrice = obj => {
    let cost = shoppingCart.priceProduct * shoppingCart.amountProduct ;
    let division = cost * shoppingCart.discountion / 100;
    return(cost - division);
}