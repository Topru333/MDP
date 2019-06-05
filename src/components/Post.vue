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
        ? this.fulltext.substr(0, 150) + " [...]"
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
  display: inline-block;
  border-radius: 50px;
  opacity: 0.7;
  transition: 0.3s;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-box-shadow: 0 0 6px 4px #ff6475;
  -moz-box-shadow: 0 0 6px 4px #ff6475;
  box-shadow: 0 0 10px 8px #ff6475;
}
.post.unfold > #content > #post_img {
  display: none;
}

#content {
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
}
#content > img {
  margin-left: 50px;
  margin-right: 50px;
  background-color: #101C1C;
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  border-radius: 50px;
  -webkit-filter: sepia(1) hue-rotate(240deg);
  filter: sepia(1) hue-rotate(220deg);
  z-index: -1;
}
#text {
  padding: 0px 50px 0px 50px;
  max-height: 230px;
  font-size: 20px;
  color: #ff9e9e;
  flex-basis: 80%;
  z-index: -1;
}
#header {
  padding: 0px 50px 0px 50px;

  font-weight: bold;
  color: #ffc6c6;
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
    display: inline-table;
  }

  #text {
    display: none;
    visibility: hidden;
  }
  #content {
    flex-direction: column;
  }
  #content > img {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
