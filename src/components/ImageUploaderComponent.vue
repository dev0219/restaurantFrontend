<template>
  <div>
    <input type="file" @change="handleFileChange" accept="image/*" />
    <div class="preview-div" v-if="previewImage">
      <img :src="previewImage" alt="Preview" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUploaderComponent",
  props: {
    name: String,
    src: String,
  },
  data() {
    return {
      previewImage: this.src || null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // You can optionally validate the file type and size here

        // Create a FileReader to read the file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          // Set the previewImage to the data URL, which can be used to display the image
          this.previewImage = e.target.result;
          this.$emit("getImage", e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
  },
  created() {
    console.log("-- -src", this.src);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.preview-div {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid;
  margin: auto;
  margin-top: 10px;
}
.preview-div img {
  max-width: 200px;
  max-height: 200px;
}
</style>
