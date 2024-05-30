<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="d-flex justify-content-start">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/icon/logo1.png" alt="" width="30" height="30">
        </a>
        <div class="navbar-brand" @click="$emit('toggleSidebar')">
          <img src="../assets/images/icon/admin.svg" alt="" width="30" height="30">
        </div>
      </div>
      
      <div class="btn-group d-flex justify-content-end">
        <button type="button" class="navbar-brand btn" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../assets/images/icon/admin.svg" alt="" width="30" height="30">
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">個人資料</a></li>
          <li><a class="dropdown-item" href="#">登出</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    // emits: ["toggle"],
    name: 'AdminHeader'
  };
</script>

<style lang="scss" scoped>
  .navbar{
    background-color: $irishcoffee;
 
    .navbar-brand{
      img{
        font-size: 40px;
        background-color: $irishcoffee;
        color: $white;
        border: none;
        &:hover {
          cursor: pointer;
        }
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
};

</style>