<template>
  <div class="sidebar" :class="{ 'sidebar-expanded': isExpanded }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <ul class="nav" v-if="!isExpanded">
      <li v-for="item in navItems" :key="item.text" class="nav-item" >
        <admin-icon-manger :icon="item.icon" :expanded="false" />
      </li>
    </ul>

    <ul v-else class="accordion accordion-flush" id="accordionFlushExample" >
      <li v-for="(item, index) in navItems" :key="item.text" class="accordion-item" >
        <h2 class="accordion-header" :id="'flush-heading' + index">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse' + index" aria-expanded="false" :aria-controls="'flush-collapse' + index" @click="toggleExpand(index)">
            <admin-icon-manger :icon="item.icon" :expanded="expandedIndex === index" />
            <span class="nav-text">{{ item.text }}</span>
          </button>
        </h2>
        <div :id="'flush-collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'flush-heading' + index" data-bs-parent="#accordionFlushExample">
          <ul class="accordion-body">
            <li v-for="subItem in item.subItems" :key="subItem.text">
              <a :href="subItem.link">{{ subItem.text }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { variables } from '../assets/js/AdminVariables.js';
import AdminIconManger from "../components/AdminIconManger.vue";

export default {
  components:{
    AdminIconManger},
  props: {
    isExpanded: {
      type: Boolean,
      // required: true,
      default: false
    }
  },
  data() {
    return {
      navItems: [
        { 
          text: variables.memberblock.member, icon: 'member', 
          subItems: [{ text: variables.memberblock.memberList, link: '/adminMemberList' }] 
        },
        { 
          text: variables.productblock.product, icon: 'product', 
          subItems: [{ text: variables.productblock.typeList, link: '/tid101/g2/adminTypeList' }, { text: variables.productblock.productList, link: '/tid101/g2/adminProductList' }] 
        },
        { 
          text: variables.disblock.discount, icon: 'discount', 
          subItems: [{ text: variables.disblock.coupon, link: '/tid101/g2/adminCoupon' }] 
        },
        { 
          text: variables.orderblock.order, icon: 'order', 
          subItems: [{ text: variables.orderblock.orderList, link: '/tid101/g2/adminOrderList'  }] 
        },
        { 
          text: variables.articleblock.wine, icon: 'wine', 
          subItems: [{ text: variables.articleblock.categoryList, link: '/tid101/g2/adminCategoryList' }, { text: variables.articleblock.articleList, link: '/AdminArticleList' }] 
        },
        { 
          text: variables.resblock.reservation, icon: 'reservation', 
          subItems: [{ text: variables.resblock.bookingList, link: '/tid101/g2/adminBookingList' }] 
        },
        { 
          text: variables.adminblock.admin, icon: 'admin', 
          subItems: [{ text: variables.adminblock.account, link: '/tid101/g2/adminAccount' }] 
        },
      ],
      expandedIndex: null,
      mouseOver: false,
    };
  },
  methods: {
    // toggleSidebar() {
    //   this.isExpanded = !this.isExpanded;
    // },
    // icon的svg轉換
    handleMouseEnter() {
      if (!this.isExpanded) {
        this.mouseOver = true;
        this.$emit('update:isExpanded', true);
      }
    },
    handleMouseLeave() {
      if (this.mouseOver) {
        this.mouseOver = false;
        this.$emit('update:isExpanded', false);
      }
    },
    toggleExpand(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },

  }
};
</script>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    width: 80px;
    height: 100vh;
    background-color: $irishcoffee;
    color: $white;
    transition: width 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    .nav-item svg {
      fill: $white;
    }
    &-expanded {
      width: 250px;
    }

    .nav, .accordion {
      list-style: none;
      padding: 0;
      width: 100%;

      .nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 100%;
        cursor: pointer;

        .nav-text {
          display: none;
          white-space: nowrap;
          margin-left: 10px;
        }
      }
    }
    .accordion-item {
      background-color: $irishcoffee;

      .accordion-button {
        display: flex;
        align-items: center;
        outline: none;
        background-color: $irishcoffee;
        color: $white;
        .nav-icon {
          flex-shrink: 0;
          margin-right: 30px;
        }
        &::after {
          background-image: url('../assets/images/icon/whiteArrow.svg');
        
        }
        &:not(.collapsed) {
          color: $campari;
          &::after {
            background-image: url('../assets/images/icon/CampariArrow.svg');
          }
        }
        &:focus {
          outline: none;
          box-shadow: none;
        }
      }
    }
    .accordion-body{
      list-style: none;

      li{
        padding-bottom: 15px;
        line-height: 20px;

        a{
          
          text-decoration: none;
          color: $white;
          display: block;
          height: 100%;
          padding-left: 55px;
          &:hover{
            color: $campari;
          }
        }
      }
      
    }

    &.sidebar-expanded .nav-item .nav-text {
      display: inline;
    }
  }
</style>
