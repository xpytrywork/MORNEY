<template>
  <div class="nav">
    <router-link to="money">记账</router-link>|
    <router-link to="labels">标签</router-link>|
    <router-link to="statistics">统计</router-link>|
    <!-- 帮助定位 -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import x from "@/assets/icons/money.svg";
export default Vue.extend({
  name: "Nav",
});
</script>
<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>
