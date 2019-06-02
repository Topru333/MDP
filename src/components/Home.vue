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
        <Post v-for="(post, index) in posts" :key="index" :fulltext="post.text" :header="post.header" :imgPath="post.img" :reverseDir="index%2===1"/>
        <Post
          fulltext="Blah blah blah blah blah blah
         blah blah blah blah blah blah blah blah blah
         blah blah blah blah blah blah blah blah blah
         blah blah blah blah blah blah blah blah blah
         blah blah blah blah blah blah blah blah blah!"
          header="Header"
        />
        <Post fulltext="hello!" header="Header" :reverseDir="true"/>
        <Post fulltext="hello!" header="Header"/>
        <Post fulltext="hello!" header="Header" :reverseDir="true"/>
        <Post fulltext="hello!" header="Header"/>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post";
import JQuery from "jquery";
import db from "@/fb";

let $ = JQuery;
export default {
  name: "Home",
  data: function() {
    return {
      posts: []
    };
  },
  components: {
    Post
  },
  methods: {
    updatePosts: function() {
      console.log('start update posts');
      db.collection("Posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.posts.push(doc.data());
        });
      });
      console.log('end update posts');
    }
  },
  created() {
    console.log("created");
    this.updatePosts();
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
      $(".post").css("filter", "sepia(" + (percent / 2) * 100 + "%)");
    });
    console.log("mounted");
  }
};
</script>

<style scoped>
#header_img {
  position: absolute;
  transform: translate(-50%, -10%);
  z-index: -10;
  margin-top: 60px;
  background-color: #E5E4C9;
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
@media (min-width: 1000px) {
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
    transition: 0.3s;
  }
  #menu > h1 {
    color: #111B1B;
  }
}
@media (max-width: 999px) {
  #header_img,
  #header_img_front,
  #header_scroll_color {
    visibility: hidden;
  }
  #menu > h1 {
    color: #E5E4C9;
  }
}
#menu > h1 {
  padding-right: 2vw;
}
#posts {
  padding-top: 75vh;
}
</style>
