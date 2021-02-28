<template>
  <div>
   <h1>hello {{ message }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'vue'
    }
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 16px;
  color: #ccc;
}
</style>