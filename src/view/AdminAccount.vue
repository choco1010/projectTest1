
<template>
  <AdminBreadcrumb :items="breadcrumbItems" />

  <div class="adminblock">
    <h1 class="adminblock-h1">{{ mainTitle }}</h1>
    <span class="adminblock-pipe"> | </span>
    <h1 class="adminblock-h1">{{ subTitle }}</h1>
  </div>

  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <AdminBtnAdd :click="openForm"/>
  </div>
  <section>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">項次</th>
            <th scope="col">姓名</th>
            <th scope="col">E-mail</th>
            <th scope="col">手機</th>
            <th scope="col">職位</th>
            <th scope="col">停用/啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>主管</td>
            <td>Tibame@gmail.com</td>
            <td>09123456789</td>
            <td>主管</td>
            <td></td>
            <td>
              <a href="">
                <img src="../assets/images/icon/menu-dots-vertical_3917094.svg" alt="" width="20px" height="20ox">
              </a>
            </td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>員工</td>
            <td>Tibame@gmail.com</td>
            <td>09123456789</td>
            <td>員工</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
              </div>
            </td>
            <td>
              <a href="">
                <img src="../assets/images/icon/menu-dots-vertical_3917094.svg" alt="" width="20px" height="20ox">
              </a>
            </td>
          </tr>
        </tbody>
        <caption>每頁列表顯示<span class="main__list-number">6</span>筆</caption>
      </table>
  </section>
</template>

<script>
  import { variables } from '../assets/js/AdminVariables.js';
  import AdminBreadcrumb from '../components/AdminBreadcrumb.vue';
  import AdminBtnAdd from '../components/AdminBtnAdd.vue';
  import Swal from 'sweetalert2';

  export default {
    name: 'AdminAccount',
    components: {
      AdminBreadcrumb,
      AdminBtnAdd
    },
    data() {
      return {
        mainTitle: variables.adminblock.admin,
        subTitle: variables.adminblock.account,
        breadcrumbItems: [
        { text: '首頁', link: '/adminHome', active: false },
        { text: variables.adminblock.admin, link: '', active: true },
        { text: variables.adminblock.account, link: '/adminAccount', active: false }
      ]
      };
    },
    methods: {
      async openForm() {
        const { value: formValues } = await Swal.fire({
          title: "管理者新增",
          html: `
          <form id="swal-form">
            <div class="swal2-input-group">
              <label for="swal-input1">姓名</label>
              <input id="swal-input1" class="swal2-input" placeholder="請輸入姓名">
            </div>
            <div class="swal2-input-group">
              <label for="swal-input2">E-mail</label>
              <input id="swal-input2" class="swal2-input" placeholder="請輸入 E-mail">
            </div>
            <div class="swal2-input-group">
              <label for="swal-input3">手機</label>
              <input id="swal-input3" class="swal2-input" placeholder="請輸入手機號碼">
            </div>
            <div class="swal2-input-group">
              <label for="swal-input4">設定密碼</label>
              <input id="swal-input4" type="password" class="swal2-input" placeholder="如修改密碼請直接輸入,如沒有修改則無變更">
            </div>
            <div class="swal2-input-group">
              <label for="swal-input5">確認密碼</label>
              <input id="swal-input5" type="password" class="swal2-input" placeholder="如修改密碼請直接輸入,如沒有修改則無變更">
            </div>
            <div class="swal2-input-group">
              <label for="swal-input6">職位</label>
              <select id="swal-input6" class="swal2-input">
                <option value="主管">主管</option>
                <option value="員工">員工</option>
              </select>
            </div>
            <div class="swal2-input-group">
              <label for="swal-input7">啟用/停用</label>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="swal-input7" checked>
              </div>
            </div>
          </form>
          `,
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: '儲存',
          cancelButtonText: '取消',
          preConfirm: () => {
            return {
              name: document.getElementById("swal-input1").value,
              email: document.getElementById("swal-input2").value,
              phone: document.getElementById("swal-input3").value,
              password: document.getElementById("swal-input4").value,
              confirmPassword: document.getElementById("swal-input5").value,
              position: document.getElementById("swal-input6").value,
              active: document.getElementById("swal-input7").checked
            };
          }
        });

        if (formValues) {
          Swal.fire({
            icon: 'success',
            title: '儲存成功',
            confirmButtonText: '確定'
          });
        }
      }
    }
  }
</script>



<style lang="scss" scoped>
  .adminblock{
    margin-top: 40px;
    margin-left: 160px;
    color: $campari;
    &-h1{
      display: inline;
      font-size: 40px;
    }
    &-pipe {
      font-size: 40px;
      margin: 0 20px; 
    }
  }
  .d-grid{
    margin-right: 95px;
    margin-top: 140px;
  }
  
  .table{
    width: 85%;
    margin-top: 20px;
    margin-left:160px;
    thead{
      background-color: $campari;
      color: $ramosGinFizz;
    }
    #flexSwitchCheckChecked:checked {
        background-color: $Enable;
        border: solid $Enable;
      }
    .fa-solid.fa-pencil{
      color: #222;
    } 
  }
  .swal-form{
    // z-index: 3;
    .swal2-input {
      pointer-events: auto; /* 確保輸入框可以被點擊和輸入 */
      opacity: 1; /* 確保輸入框是可見的 */
  }

  }
  // sweet2
  // .swal2-popup.swal2-modal.swal2-show {
  //   width: 600px !important; /* 確保 SweetAlert2 彈窗的寬度 */
  // }

  // .swal2-input-group {
  //   display: flex;
  //   align-items: center;
  //   margin-bottom: 10px;
  // }

  // .swal2-input-group label {
  //   width: 100px; /* 調整標籤的寬度 */
  //   margin-right: 10px;
  // }

  // .swal2-input-group input,
  // .swal2-input-group select {
  //   flex: 1;
  // }

  // .swal2-input {
  //   width: 100% !important; /* 確保輸入框寬度為 100% */
  // }
</style>