<template>
  <div class="post">
    <div class="clicker" v-on:click="togglePost"></div>
    <div id="content" v-bind:class="{ 'reverse': reverseDir }">
      <div id="header">{{header}}</div>
      <img id="post_img" :src="imgPath">
      <div id="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    header: String,
    fulltext: String,
    imgPath: String,
    reverseDir: Boolean
  },
  data: function() {
    return {
      unfolded: false
    };
  },
  computed: {
    // a computed getter
    text: function() {
      return this.fulltext.length > 150 && !this.unfolded
        ? (this.fulltext.substr(0, 150) + ' [...]')
        : this.fulltext;
    }
  },
  methods: {
    togglePost(event) {
      event.target.parentNode.classList.toggle("unfold");
      this.unfolded = !this.unfolded;
    }
  }
};
</script>

<style scoped>
.clicker {
  width: 100%;
  height: 100%;
  position: absolute;
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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.post.unfold > #content > #post_img {
  display: none;
}
.post.unfold > #content > #text {
  width: 80vw;
  max-width: 80vw;
}
.post.unfold > #content {
  display: block;
}
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
}
#header {
  font-weight: bold;
}
.post:hover {
  opacity: 1;
  cursor: pointer;
}
.reverse {
  flex-direction: row-reverse;
}
@media (max-height: 640px) {
  #content > img {
    min-width: 130px;
    max-width: 130px;
    min-height: 130px;
    max-height: 130px;
  }
}

@media (max-height: 300px) {
  #content > img {
    display: none;
  }
}

@media (min-width: 1000px) {
  .post {
    background-image: url("/postbackground.png");
    background-size: contain;
  }
  .post.unfold {
    background-image: none;
  }
  .unfold {
    width: 90vw;
    height: 80vh;
  }
  #header {
    display: none;
  }
}
@media (max-width: 999px) {
  .unfold {
    height: 80vh;
  }
  .post.unfold > #content > #text {
    visibility: visible;
    width: 65vw;
    max-width: 65vw;
  }

  #text {
    position: absolute;
    visibility: hidden;
  }
  #content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #content > img {
    margin-left: 0px;
    margin-right: 0px;
  }
  #content > div {
    margin-bottom: 20px;
  }
}
</style>
