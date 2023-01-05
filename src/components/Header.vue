<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <router-link to="/dashboard">
          <span class="sr-only">Workflow</span>
          <img class="h-12 w-auto sm:h-16" src="../assets/logo.png" alt="">
        </router-link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button @click="setShowMobileMenu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <router-link to="/auth/signin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </router-link>
        <router-link to="/auth/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </router-link>
      </div>
    </div>
  </div>

  <div :class="{'hidden': showMobileMenu == false}" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          </div>
          <div class="-mr-2">
            <button @click="showMobileMenu = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900"> Solutions </span>

            </a>

          </nav>
        </div>
      </div>
      <div class="py-6 px-5 space-y-6">
        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
        </div>
        <div>
          <router-link to="/auth/signup" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </router-link>
          <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <router-link to="/auth/signin" class="text-indigo-600 hover:text-indigo-500"> Sign in </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    data () {
        return {
            showMenu: false,
            showMobileMenu: false
        }
    },
    methods: {
        setShowMenu () {
            this.showMenu = !this.showMenu
        },
        setShowMobileMenu () {
            this.showMobileMenu = !this.showMobileMenu
        }
    }
}
</script>