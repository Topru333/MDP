<template>
  <div id="app">
    <Night/>
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home";
import Night from "./components/Night";

export default {
  name: "App",
  components: {
    Home,
    Night
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #322d45;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
