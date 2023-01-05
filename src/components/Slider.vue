<template>
  <div>
      <carousel :items-to-show="1" autoplay="2000">
        <slide :key="1">
            <div class="w-full md:w-1/2">
                <img src="../assets/images/carousel1.jpg" />
            </div>
        </slide>
        <slide :key="2">
            <div class="w-full md:w-2/3">
                <img src="../assets/images/carousel2.jpg" />
            </div>
        </slide>
      </carousel>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
};

</script>