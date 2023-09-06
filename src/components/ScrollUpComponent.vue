<template>
  <button class="scroll-button" @click="scrollToTop">↑</button>
</template>

<script>
export default {
  name: "ScrollUpComponent",
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
  width: 35px;
  border: 1px solid;
  border-radius: 40px;
  height: 35px;
  background-color: #57a957;
  color: rgba(0, 0, 0, 0.668);
  font-size: 18px;
  font-weight: 900;
  border-color: #57a957;
  position: fixed;
  right: 5px;
  bottom: 70px;
  opacity: 0.65;

  &:hover {
    opacity: 0.45;
    transform: scale(1.05);
  }
}
</style>
