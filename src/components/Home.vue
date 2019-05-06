<template>
  <div class="home">
    <div id="header">
      <div id="header_scroll_color"/>
      <img id="header_img" width="100%" height="100%" src="../assets/header.png">
      <img id="header_img_front" width="100%" height="100%" src="../assets/header_front.png">
      <div id="menu">
        <h1>ВЕЖА</h1>
      </div>
      <div id="posts">
        <Post
          text="Blah blah blah blah blah blah 
         blah blah blah blah blah blah blah blah blah
         blah blah blah blah blah blah blah blah blah 
         blah blah blah blah blah blah blah blah blah 
         blah blah blah blah blah blah blah blah blah!"
          header="Header"
        />
        <Post text="hello!" header="Header" :reverseDir="true"/>
        <Post text="hello!" header="Header"/>
        <Post text="hello!" header="Header" :reverseDir="true"/>
        <Post text="hello!" header="Header"/>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post";
import JQuery from "jquery";
let $ = JQuery;
export default {
  name: "Home",
  components: {
    Post
  },
  methods: {
    toScreenSizeX: function(a) {
      let result = a * ($(window).width() / 1900);
      return result;
    }
  },
  beforeMount() {
    $(window).scroll(function() {
      let scrollval = $(this).scrollTop(); // It will return scroll value
      var percent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      if (percent < 0.35) {
        $("#menu").css("opacity", 1 - percent);
      }
      $("#header_img_front").css(
        "transform",
        "translate(-50%,-" + (scrollval / 9 + 7) + "%)"
      );
      $("#header_scroll_color").css(
        "transform",
        "translateY(-" + (scrollval / 9 + 7) + "%)"
      );
      $(".post").css("filter", "sepia(" + (percent / 2 * 100) + "%)");
    });
  }
};
</script>

<style scoped>
#header_img {
  position: absolute;
  transform: translate(-50%, -10%);
  z-index: -10;
  margin-top: 60px;
}
#header_img_front {
  position: absolute;
  top: 110px;
  transform: translate(-50%, -0%);
  z-index: -9;
}
#header_scroll_color {
  position: absolute;
  top: 90vh;
  width: 100vw;
  height: 100vh;
  background-color: #101C1C;
  z-index: -8;
}
@media only screen and (min-width: 700px) {
  #menu {
    position: fixed;
    height: 10vh;
    width: 96vw;
    margin: 1vw;
    border-radius: 20px;
    background-color: #E5E4C9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
  }
}
#menu > h1 {
  padding-right: 2vw;
  color: #111B1B;
}
#posts {
  padding-top: 75vh;
}
</style>
