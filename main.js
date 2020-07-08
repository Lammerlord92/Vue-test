var product = 'Socks'
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpeg',
        description: 'This is a pair of socks',
        link: 'https://vuetifyjs.com/en/getting-started/quick-start/',
        inventory: 100,
        onSale: "true",
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green.jpeg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.jpeg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function(variantImage){
            this.image=variantImage
        }
    }
})