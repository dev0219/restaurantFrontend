<template>
  <button class="scroll-button" @click="scrollToTop">↑</button>
</template>

<script>
export default {
  name: "ScrollUp",
  props: {
    name: String,
  },
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    scrollToTop() {
      const scrollStep = -window.scrollY / (500 / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
          this.showButton = false; // Hide the button after reaching top
          this.scrollToElement("h1"); // Scroll to the element with ID "h1"
        }
      }, 15);
    },
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scroll-button {
  width: 40px;
  border: 1px solid;
  border-radius: 40px;
  height: 40px;
  background-color: #57a957;
  color: white;
  font-weight: 900;
  border-color: #57a957;
  position: fixed;
  right: 20px;
  bottom: 70px;
}
</style>
