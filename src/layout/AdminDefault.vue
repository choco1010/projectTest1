<template>
  <header v-if="!isLoginPage">
    <admin-header @toggleSidebar="toggleSidebar" />
    <admin-slidebar :isExpanded="isExpanded" @update:isExpanded="isExpanded = $event" />
  </header>

  <main :class="{ 'main-shifted': isExpanded }">

    <RouterView></RouterView>
    
  </main>
</template>

<script>
  import AdminHeader from './AdminHeader.vue'
  import AdminSlidebar from './AdminSlidebar.vue'
  import { useRoute } from 'vue-router'


  export default {
    components: {
      AdminHeader,
      AdminSlidebar,
    },
    data() {
      return {
        isExpanded: false,
        isLoginPage: false,
      };
    },
    created() {
      const route = useRoute();
      this.isLoginPage = route.path === '/adminLogin';
    },
    methods: {
      toggleSidebar() {
        this.isExpanded = !this.isExpanded;
      }
    },
    watch: {
      '$route'(to) {
        this.isLoginPage = to.path === '/adminLogin';
      },
    },
  }
</script>

<style lang="scss" scoped>
  main {
    transition: margin-left 0.3s ease;
  }

  .main-shifted {
    margin-left: 160px; /* 根據側邊欄的寬度調整這個值 */
  }

</style>