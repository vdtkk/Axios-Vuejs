<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr />
    <div
      class="d-flex flex-wrap flex-row justify-content-center align-items-center"
    >
      <div v-for="post in postlist" class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" :alt="post.title" />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.previewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import customAxios from "../custom_axios";

export default {
  data() {
    return {
      postlist: [],
    };
  },

  created() {
    customAxios
      .get("/posts.json")
      .then((response) => {
        let data = response.data;
        for (let key in data) {
          // let tmp= data[key]
          // tmp.id=key
          this.postlist.push({ ...data[key], id: key });
        }
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style>
.card {
  width: 300px;
}
</style>
