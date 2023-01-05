<template>
  <div>
    <div class="min-h-screen bg-purple-400 flex justify-center items-center">
      <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class=" absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:bloc"></div>
      <div class="md:py-12 py-4 md:px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
            Create An Account
          </h1>
          <p class=" w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Create an account to enjoy all the services without any ads for free!
          </p>
        </div>
        <form @submit.prevent="signup">
          <div class="space-y-4">
            <input type="text" name="email" v-model="email" placeholder="Email Addres" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
            <input type="text" name="username" v-model="username" placeholder="Username" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
<!--            <input type="date" name="date" v-model="date" placeholder="Date of birth" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>-->
            <input type="password" name="password" v-model="password" placeholder="Password" class=" block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
            <video id="live-video" v-if="isCameraStarted" width="320" height="240" autoplay hidden/>
            <canvas id="live-camera" width="320" height="240"/>
            <canvas id="live-canvas" width="320" height="240" hidden/>
            <canvas id="live-temp" width="224" height="224"/>
          </div>
          <div class="text-center mt-6">
            <input type="submit" class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl" value="Create Account">
            <p class="mt-4 text-sm">
              Already Have An Account?
              <span class="underline cursor-pointer">
                <router-link to="/auth/signin">
                  Sign In
                </router-link>
              </span>
            </p>
          </div>
        </form>
      </div>
      <div
        class="
          w-40
          h-40
          absolute
          bg-purple-300
          rounded-full
          top-0
          right-12
          hidden
          md:block
        "
      ></div>
      <div
        class="
          w-20
          h-40
          absolute
          bg-purple-300
          rounded-full
          bottom-20
          left-10
          transform
          rotate-45
          hidden
          md:block
        "
      ></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";


export default {
  data() {
    return {
      email: null,
      username: null,
      date: null,
      password: null,
      registered: false,
      image: null,
      detect_session: null,
      pose_session: null,
    }
  },
  computed: {
      isCameraStarted () {
        return this.$store.getters['camera/isCameraStarted']
      }
  },
  methods: {
    async signup() {
      if (this.email === null) {
        this.$notify({group: "error", title: "SignUp", text: "Please fill out the email field"}, 2000)
        return
      }

      if (this.username === null) {
        this.$notify({group: "error", title: "SignUp", text: "Please fill out the username field"}, 2000)
        return
      }

      if (this.password === null) {
        this.$notify({group: "error", title: "SignUp", text: "Please fill out the password field"}, 2000)

        return
      }

      this.take_photo()

      const response = await axios.post(
          "http://127.0.0.1:8000/signup",
          {"user_email": this.email, "user_name": this.username, "user_pass": this.password, "signup_date": this.date}
      );

      this.registered = response.data["created"]
      if (this.registered === true) {
        const response = await axios.post(
            "http://127.0.0.1:8000/face/enroll/feature",
            {
              "image": this.image,
              "user_email": this.email
            }
        )

        this.$store.commit('face/set', this.email)
        this.close_camera()
        await this.$router.push("/dashboard")
      }
    },

    close_camera() {
      this.$store.dispatch('camera/stopCamera')
    },

    async show_photo () {
      const video = document.getElementById('live-video')
      const canvas = document.getElementById('live-camera')
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.drawImage(video, 0, 0, 320, 240)

      try {
        const detection_output = await faceapi.detect_photo(this.detect_session, 'live-camera')
        await faceapi.predict_pose(this.pose_session, 'live-camera', detection_output.bbox)

        canvasCtx.strokeStyle = "red"
        var face_count = detection_output.bbox.shape[0],
            bbox_size = detection_output.bbox.shape[1]

        for (let i = 0; i < face_count; i++) {
          var x1 = detection_output.bbox.data[i * bbox_size],
              y1 = detection_output.bbox.data[i * bbox_size + 1],
              x2 = detection_output.bbox.data[i * bbox_size + 2],
              y2 = detection_output.bbox.data[i * bbox_size + 3]
          canvasCtx.rect(parseInt(x1), parseInt(y1), parseInt(x2 - x1), parseInt(y2 - y1))
          canvasCtx.stroke()
        }

      } catch (e) {
        console.log("failed the process.")
      }

      this.image = canvas.toDataURL('image/jpeg')
      setTimeout(() => this.show_photo(), 33)
    },

    take_photo () {
      const video = document.getElementById('live-video')
      const canvas = document.getElementById('live-canvas')
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.drawImage(video, 0, 0, 320, 240)
      this.image = canvas.toDataURL('image/jpeg')
    },

    async show_camera() {
      await this.$store.dispatch('camera/startCamera')
          .then((stream) => {
            const videoDiv = document.getElementById('live-video')
            videoDiv.srcObject = stream
          })
      await this.show_photo()
    },

    async load_models() {
      await faceapi.load_opencv();
      this.detect_session = await faceapi.load_detection_model()
      this.pose_session = await faceapi.load_pose_model()
    },
  },

  mounted() {
    this.load_models()
    this.show_camera()
  }
}
</script>