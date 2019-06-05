<template>
  <div class="Night">
    <div id="fill_color"></div>
  </div>
</template>

<script>
export default {
  name: "Night"
};
</script>

<style scoped>
.Night {
  position: fixed;
  height: 100%;
  width: 100%;
}
#fill_color {
  height: 100%;
  width: 100%;
  background-color: #ff6c75;
}
</style>
