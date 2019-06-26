const name = 'Ilya';
const userAge = 29;

const user = {
    name,
    userAge,
    location: 'Odessa'
}

console.log(user)

const product = {
    label: 'MacBook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label: myLabel, rating = 5} = product;

console.log(myLabel, rating)

const transaction = (type, {label, stock}) =>{
    console.log(type, label, stock)
}

transaction('order', product);