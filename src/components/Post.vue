<template>
  <div class="post">
    <div id="content" v-bind:class="{ 'reverse': reverseDir }">
      <img id="post_img">
      <div id="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    header: String,
    text: String,
    imgPath: String,
    reverseDir: Boolean
  }
};
</script>

<style scoped>
#content {
  margin-top: 8vh;
  display: flex;
}
#content > img {
  margin-left: 50px;
  margin-right: 50px;
  background-color: #101C1C;
  min-width: 230px;
  max-width: 230px;
  min-height: 230px;
  max-height: 230px;
}
#text {
  padding: 0px 50px 0px 50px;
  width: 40vw;
  max-height: 230px;
  max-width: 40vw;
  overflow: hidden;
  text-align: center;
  align-items: center;
}
.post {
  overflow: hidden;
  margin-top: 100px;
  height: 45vh;
  width: 80vw;
  background-color: #E5E4C9;
  display: inline-block;
  border-radius: 50px;
  opacity: 0.8;
  transition: 0.3s;
}
.post:hover {
  opacity: 1;
  cursor: pointer;
}
.reverse {
  flex-direction: row-reverse;
}
@media only screen and (min-width: 750px) {
  .post {
    background-image: url("/postbackground.png");
    background-size: contain;
  }
}
@media only screen and (max-width: 750px) {
  #text {
    position: absolute;
    visibility: hidden;
  }
  #content {
    justify-content: center;
    align-items: center;
  }
  #content > img {
    margin-left: 0px;
  }
}
</style>
