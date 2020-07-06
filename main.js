var product='Socks'
var app=new Vue({
    el:'#app',
    data:{
        product:'Socks',
        image:'./assets/vmSocks-green.jpg',
        description:'This is a pair of socks',
        link:'https://vuetifyjs.com/en/getting-started/quick-start/',
        inventory:100,
        onSale:"true",
        details:["80% cotton", "20% polyester", "Gender-neutral"]
    }
})