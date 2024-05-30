<template>
 
    <button class="create_btn" type="button" @click="handleClick">
      <img src="../assets/images/icon/white_plus.svg" alt="" height="20px" width="20px">
      新增
    </button>

</template>


<script>
  export default {
    name: 'AdminBtnAdd',
    props: {
      click: {
        type: Function,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.click();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .create_btn{
    background-color: $campari;
    color: $ramosGinFizz;
    border: none;
    border-radius: 4px;
    padding: 10px;
  }

</style>