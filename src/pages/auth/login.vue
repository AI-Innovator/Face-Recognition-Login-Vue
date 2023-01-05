<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="min-h-screen bg-purple-400 flex justify-center items-center">
      <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div class="md:py-12 py-4 md:px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Signin</h1>
          <p class=" w-80 text-center text-sm mb-1 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Signin to your dashboard to access all the services
          </p>
        </div>
        <div class="py-3">
          <input type="radio" id="signin-fr" value="Mode1" v-model="picked" />
          <label for="signin-fr" class="text-sm"> By using face recognition</label>
          <div class="py-2">
            <video id="live-video" v-if="isCameraStarted" width="320" height="240" autoplay />
            <canvas id="live-canvas" width="320" height="240" hidden />
          </div>
          <input type="radio" id="signin-user" value="Mode2" v-model="picked" />
          <label for="signin-user" class="text-sm"> By using user information</label>
        </div>
        <div class="space-y-4">
          <input type="text" v-model="email" placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
          <input type="password" v-model="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
        </div>
        <div class="text-center mt-6">
          <button @click="recognize_face" class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Signin</button>
          <p class="mt-4 text-sm">
            Don't Have An Account?
            <span class="underline cursor-pointer">
                <router-link to="/auth/signup">
                    Sign Up
                </router-link>
            </span>
          </p>
        </div>
      </div>
      <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div class="w-20h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      picked: "Mode2",
      image: null,
      email: null,
      password: null
    }
  },
  computed: {
    isCameraStarted () {
      return this.$store.getters['camera/isCameraStarted']
    }
  },
  methods: {
    async show_camera() {
      await this.$store.dispatch('camera/startCamera')
      .then((stream) => {
        const videoDiv = document.getElementById('live-video')
        videoDiv.srcObject = stream
      })
    },

    close_camera() {
      this.$store.dispatch('camera/stopCamera')
    },

    async take_photo () {
      const video = document.getElementById('live-video')
      const canvas = document.getElementById('live-canvas')
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.drawImage(video, 0, 0, 320, 240)
      this.image = canvas.toDataURL('image/jpeg')
      // await this.$store.dispatch('user/uploadBase64', {
      //   user: this.user.name,
      //   content
      // })
    },

    async recognize_face() {
      if (this.picked === "Mode1") {
        await this.take_photo()
      } else {
        this.image = null
      }
      const response = await axios.post(
          "http://127.0.0.1:8000/face/recognize/feature",
          {
            "mode": this.picked,
            "image": this.image,
            "user_email": this.email,
            'user_password': this.password
          }
      )

      if (response.data["isEnrolled"] === true) {
        this.$notify({group: "success", title: "Face Enrollment Result", text: "The input face has been enrolled successfully."}, 2000)
        this.close_camera()
        this.$store.commit("user/set", response.data["user_email"])
        await this.$router.push("/dashboard")
      } else {
        this.$notify({group: "error", title: "Face Enrollment Result", text: "The input face has been enrolled successfully."}, 2000)
        this.close_camera()
        this.$store.commit("user/set", response.data["user_email"])
        await this.$router.push("/dashboard")
      }
    }

  },
  mounted() {
    this.show_camera()
  },
}
</script>