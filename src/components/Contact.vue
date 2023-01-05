<template>
  <div class="my-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-black text-base">
        If you’d like to accelerate your project, get in contact with us, and
        we’ll have a chat about what we can do to help you today!
      </div>

      <div class="mt-6">
        <form>
          <div class="w-full flex flex-wrap mb-6">
            <div class="w-full mb-6 md:mb-0">
              <input
                class="
                  block
                  w-full
                  text-gray-700
                  border-2
                  rounded-md
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  bg-white
                  border-gray-300
                "
                id="grid-first-name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div class="w-full">
              <input
                class="
                  block
                  w-full
                  text-gray-700
                  border-2 border-gray-300
                  rounded-md
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none
                  bg-white
                "
                id="grid-last-name"
                type="text"
                placeholder="Your Email Address"
              />
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full ">
              <textarea
                placeholder="Your message"
                class="
                  no-resize
                  block
                  w-full
                  text-gray-700
                  border-2 border-gray-300
                  rounded-md
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  bg-white
                  h-48
                  resize-none
                "
                id="message"
              ></textarea>
            </div>
          </div>
          <div class="mt-6">
            <div class="">
              <button
                class="whitespace-nowrap inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                type="button"
              >
                Send Us
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
</style>