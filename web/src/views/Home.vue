<template>
  <div>
    <!-- end of swiper -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="w-100"
          src="https://ossweb-img.qq.com/upload/adw/image/194/20211004/ceeda15ef5f83463a4e9fedaee727607.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="https://ossweb-img.qq.com/upload/adw/image/194/20211004/ceeda15ef5f83463a4e9fedaee727607.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="https://ossweb-img.qq.com/upload/adw/image/194/20211004/ceeda15ef5f83463a4e9fedaee727607.jpeg"
          alt=""
        />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons text-center pt-3 text-dark-1 bg-white mt-3">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="fs-sm bg-light py-2">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home",
        },
      },
    };
  },
};
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 1;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border: none;
    }
  }
}
.sprite {
  background: url(../assets/index.png) no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-news {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: -224px -67px;
  }
  &.sprite-arrow {
    width: 0.7692rem;
    height: 0.7692rem;
    background-position: -141px -232px;
  }
}
</style>
