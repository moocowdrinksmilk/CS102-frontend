<template>
<div class=" bg-indigo-100 bottom-0 top-0 fixed">
  <div @click="open = false" class="flex w-full md:w-56 text-gray-700 bg-indigo-100 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0" x-data="{ open: false }">
    <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between bg-indigo-100">
      <svg class="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style="enable-background:new 0 0 225 225;" xml:space="preserve">
                                <style type="text/css">
                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}
                                </style>
                                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                <path id="Layer0_0_1_STROKES" class="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"/>
                                </g>
                                </g>
                            </svg>

                            <div class="text-2xl bg-indigo-100 text-indigo-800 font-semibold"> PortNet</div>
                        </div>
                        
      <button class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav :class="{'block': open, 'hidden': !open}" class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto  bg-indigo-100  top-0 w-full bottom-0">
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-400 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/home">Overview</a>
      <nuxt-link class="block px-4 py-2 mt-2 text-sm font-semibold text-black bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="vessels">Vessels</nuxt-link>
      <nuxt-link class="block px-4 py-2 mt-2 text-sm font-semibold text-black bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/alerts">Alerts</nuxt-link>
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-black bg-transparent rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="">Contacts</a>
      <br>
      <hr>
        <a class="block px-4 py-2 mt-2 text-sm font-semibold text-black bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/settings">Settings</a>
        <a class="bg-gray-400 text-gray-900 absolute bottom-0 mb-12 ml-12 block px-8 py-2 mt-50 text-sm font-semibold text-gray-100 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer" @click="logout">Logout</a>
    </nav>
  </div>
  </div>
</template>
 
<script>
export default {
  props: {
    page: "",
  },
  methods: {
    logout() {
      if (process.client) {
        window.localStorage.clear();
      }

      this.$router.push("/");
    },
    success: function () {
      console.log("oko success");
    },
    close: function () {
      console.log("oko closed");
    },
  },
};
</script>