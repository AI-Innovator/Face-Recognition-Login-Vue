<template>
    <div>
        <Header />
        <Slider />
        <Contact />
        <Footer />
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { 
    Header,
    Slider,
    Contact,
    Footer
  }
}
</script>