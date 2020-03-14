Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
          <img v-bind:src="image" :alt="altText">
      </div>
      <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div v-for="(variant, index) in variants"
              :key="variant.variantId"
              class="color-box"
              :style="{backgroundColor: variant.variantColor}"
              @mouseover=" updateProduct(index)">
          </div>

          <button v-on:click="addToCart"
              :disaled="!inStock"
              :class="{ disabledButton: !inStock}"
              >Add to Cart</button>
          <button v-on:click="deleteFromCart">Delete from Cart</button>
          <div class="cart">
              <p>Cart({{cart}})</p>
          </div>
      </div>
  </div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      altText: "A pair of socks",
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantsId: 2234,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green.jpg",
          varintQuantity: 10
        },
        {
          variantsId: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue.jpg",
          varintQuantity: 0
        }
      ],
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    deleteFromCart() {
      if (this.cart > 0) {
        this.cart--;
      }
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].varintQuantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    }
  }
});
var app = new Vue({
  el: "#app",
  data: {
    premium: true
  }
});
