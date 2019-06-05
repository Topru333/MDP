<template>
  <div class="home">
    <div id="header">
      <img id="header_img_mobile" width="100%" height="100%" src="../assets/mobile_header.png">
      <div class="content">
        <div class="paralax">
          <div class="layer rocks2"></div>
          <div class="layer rocks1"></div>
          <div class="layer hills"></div>
          <div class="layer foreground"></div>
        </div>
      </div>
      <div id="menu">
        <h1>ВЕЖА</h1>
      </div>
    </div>
    <div id="info">
      <h3>Уникальный археологический памятник Верхнего Поволжья второй половины XIII века расположенный в Костромской низине</h3>
    </div>
    <div id="posts">
      <Post
        v-for="(post, index) in posts"
        :key="index"
        :fulltext="post.text"
        :header="post.header"
        :imgPath="post.img"
        :reverseDir="index%2===1"
      />
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
      console.log("start update posts");
      db.collection("Posts")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.posts.push(doc.data());
          });
        });
      console.log("end update posts");
    }
  },
  created() {
    console.log("created");
    this.updatePosts();
  },
  beforeMount() {
    $(window).scroll(function() {
      var percent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      $(".post").css("filter", "sepia(" + (percent / 2) * 100 + "%)");
      if (percent <= 0.22) {
        $(".paralax").css(
          "filter",
          "brightness(" +
          (1 - percent * 4) +
          ") " +
          "hue-rotate(" +
          -percent * 200 +
          "deg)"
        );
        $("#fill_color").css(
          "filter",
          "brightness(" +
           (1 - percent * 4) +
          ") " +
          "hue-rotate(" +
          - percent * 200 +
          "deg)"
        );
      }
    });
  }
};
</script>

<style lang="scss">
#header_img,
#header_img_mobile {
  position: absolute;
  transform: translate(-50%, -10%);
  z-index: -10;
  margin-top: 60px;
}
#header_img {
  background-color: #ff6c75;
}
#header_img_front {
  position: absolute;
  top: 110px;
  transform: translate(-50%, -0%);
  z-index: -9;
}
#header_scroll_color {
  position: absolute;
  top: 99vh;
  width: 100vw;
  height: 100vh;
  background-color: #101C1C;
  z-index: -8;
}
@media (min-width: 1000px) {
  #posts {
    padding-top: 100vh;
  }
  #menu {
    position: absolute;
    height: 10vh;
    width: 96vw;
    margin: 1vw;
    font-size: 1.3vw;
    border-radius: 20px;
    //background-color: #ffcc88;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    transition: 0.3s;
  }
  #menu > h1 {
    color: #542642;
  }
  #header_img_mobile {
    display: none;
  }
  #info {
    max-width: 60%;
    float: right;
    text-align: right;
    font-size: 1.5vw;
    padding-top: 100px;
    padding-right: 45px;
    font-family: "Oswald", sans-serif;
    color: #72345b;
  }
  #info > h3 {
    position: relative;
    z-index: 999;
  }

  $scrub: #C0B3A0;
  $dayTime: true;
  $dayDuration: 120s;
  $foregroundDuration: 30s;
  $hillsDuration: 60s;
  $rocks1Duration: 120s;
  $rocks2Duration: 240s;

  section {
    margin: 0;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $scrub;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .paralax {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url("http://www.testomic.com/public/codepen-assets/img/paralax/background.jpg");
    background-size: cover;
    background-position: center;
  }

  .paralax .layer {
    position: absolute;
    width: 400%;
  }

  .paralax .foreground {
    height: 50%;
    bottom: 0;
    background: url("/foreground.png") repeat-x;
    background-size: 25% 100%;
    animation: slideshow $foregroundDuration linear infinite;
  }

  .paralax .hills {
    height: 40%;
    bottom: 15%;
    background: url("http://www.testomic.com/public/codepen-assets/img/paralax/hills.png")
      repeat-x;
    background-size: 25% 100%;
    animation: slideshow $hillsDuration linear infinite;
  }

  .paralax .rocks1 {
    height: 35%;
    bottom: 25%;
    background: url("/water.png") repeat-x;
    background-size: 25% 100%;
    animation: slideshow $rocks1Duration linear infinite;
  }

  .paralax .rocks2 {
    height: 40%;
    bottom: 15%;
    background: url("http://www.testomic.com/public/codepen-assets/img/paralax/rocks2.png")
      repeat-x;
    background-size: 25% 100%;
    animation: slideshow $rocks2Duration linear infinite;
  }

  @keyframes slideshow {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes dayToNight {
    0% {
      -webkit-filter: hue-rotate(0deg) brightness(1);
      filter: hue-rotate(0deg) brightness(1);
    }
    50% {
      -webkit-filter: hue-rotate(180deg) brightness(0.5);
      filter: hue-rotate(180deg) brightness(0.5);
    }
    100% {
      -webkit-filter: hue-rotate(0deg) brightness(1);
      filter: hue-rotate(0deg) brightness(1);
    }
  }

  /**	
  * Nonatomic Branding
  */
  #link {
    font-family: "Roboto", sans-serif;
    position: fixed;
    bottom: 5%;
    width: 100%;
    text-align: center;
  }

  .img-url {
    text-decoration: none;
  }

  .url {
    opacity: 0.5;
    text-decoration: none;
  }

  a:link {
    color: white;
  }

  a:visited {
    color: white;
  }

  a:hover {
    color: purple;
  }

  a:active {
    color: white;
  }

  #small-logo {
    width: 30px;
    transform: translate(-10px, 12px);
    opacity: 1;
  }

  /**
  * Versions
  */
  #versions {
    font-family: "Roboto", sans-serif;
    position: fixed;
    top: 5%;
    width: 100%;
    text-align: center;
  }

  .url-highlighted {
    opacity: 1;
    text-decoration: none;
  }

  .url-normal {
    opacity: 0.5;
    text-decoration: none;
  }
}
@media (max-width: 999px) {
  #header_img,
  #header_img_front,
  #header_scroll_color {
    display: none;
  }
  #menu > h1 {
    color: #E5E4C9;
  }
  #info {
    font-size: 3vw;
    padding-top: 100px;
    padding-right: 45px;
    padding-left: 45px;
    font-family: "Oswald", sans-serif;
    color: #E5E4C9;
  }
  #posts {
    padding-top: 75vh;
  }
}
#menu > h1 {
  padding-right: 2vw;
}
</style>
