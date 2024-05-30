<template>
  <img :src="iconSrc" class="nav-icon"/>
</template>

<script>
  import memberIcon from '@/assets/images/icon/member_w.svg';
  import productIcon from '@/assets/images/icon/product_w.svg';
  import discountIcon from '@/assets/images/icon/discount_w.svg';
  import orderIcon from '@/assets/images/icon/order_w.svg';
  import wineIcon from '@/assets/images/icon/wine_w.svg';
  import reservationIcon from '@/assets/images/icon/reservation_w.svg';
  import adminIcon from '@/assets/images/icon/admin_w.svg';
  // 咖啡色
  import memberIconB from '@/assets/images/icon/member_b.svg';
  import productIconB from '@/assets/images/icon/product_b.svg';
  import discountIconB from '@/assets/images/icon/discount_b.svg';
  import orderIconB from '@/assets/images/icon/order_b.svg';
  import wineIconB from '@/assets/images/icon/wine_b.svg';
  import reservationIconB from '@/assets/images/icon/reservation_b.svg';
  import adminIconB from '@/assets/images/icon/admin_b.svg';

  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      expanded: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      iconSrc() {
        const icons = {
          member: this.expanded ? memberIconB : memberIcon,
          product: this.expanded ? productIconB : productIcon,
          discount: this.expanded ? discountIconB : discountIcon,
          order: this.expanded ? orderIconB : orderIcon,
          wine: this.expanded ? wineIconB : wineIcon,
          reservation: this.expanded ? reservationIconB : reservationIcon,
          admin: this.expanded ? adminIconB : adminIcon,
        };
        return icons[this.icon];
      },
    }
  };
</script>

<style lang="scss" scoped>
  .nav-icon {
    width: 24px;
    height: 24px;
  }

  
</style>
