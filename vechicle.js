var baleno={
    name:"baleno",
    brand:"nexa",
    color:["red","yellow","white"],
    price:"8lac",
    breaks:"abc",
    tarnasmission:"manuel",
    getPrice(){
        return this.price

    }
}

var glanza={
    name:"glanza",
    brand:"toyottta",
    price:"10lac"
}
glanza.__proto__=baleno
console.log(glanza.getPrice());


