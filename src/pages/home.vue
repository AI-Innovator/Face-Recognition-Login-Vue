<template>
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link to="/dashboard">
              <span class="sr-only">Workflow</span>
              <img class="h-12 w-auto sm:h-16" src="../assets/logo.png" alt="">
            </router-link>
          </div>
          <div class="-mr-2 -my-2">
            <label>{{this.user_email}}</label>
          </div>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button @click="" type="button" class="whitespace-nowrap inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" aria-expanded="false"> Sign out </button>
<!--            <router-link to="/" v-model="close_camera" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign out </router-link>-->
          </div>
        </div>
      </div>
    </div>
</template>
<script>
</script>

