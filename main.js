var product = 'Socks'
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand:"Vue Mastery",
        selectedVariant:0,
        description: 'This is a pair of socks',
        link: 'https://vuetifyjs.com/en/getting-started/quick-start/',
        inventory: 10,
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
        addToCart() {
            this.cart += 1
            this.inventory -=1
        },
        removeFromCart() {
            this.cart -= 1
            this.inventory +=1
        },
        updateProduct(index){
            this.selectedVariant=index
            console.log(this.selectedVariant)
        }
    },
    computed:{
        title() {
            return this.brand+' '+ this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        }
        
    }
})