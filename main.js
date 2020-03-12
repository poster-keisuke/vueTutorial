var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        altText: 'A pair of socks',
        inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [{
                variantsId: 2234,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green.jpg'
            },
            {
                variantsId: 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart++
        },
        deleteFromCart() {
            if (this.cart > 0) {
                this.cart--
            }
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})