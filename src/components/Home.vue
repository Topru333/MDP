<template>
  <div class="home">
    <div id="header">
      <img id="header_img" width="100%" height="100%" src="../assets/header.png">
      <div id="menu">
        <h1>ВЕЖА</h1>
      </div>
      <div id="posts">
        <div class="post">test</div>
        <div class="post">test</div>
        <div class="post">test</div>
        <div class="post">test</div>
        <div class="post">test</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header_img {
  position: absolute;
  transform: translate(-50%, -10%);
  z-index: -10;
  margin-top: 60px;
}
#menu {
  display: flex;
  justify-content: flex-end;
}
#menu > h1 {
  margin-right: 30px;
  color: #111B1B;
}
#posts {
  margin-top: 500px;
}
.post {
  margin-top: 100px;
  height: 45vh;
  width: 80vw;
  background-color: #E5E4C9;
  display: inline-block;
}
</style>
