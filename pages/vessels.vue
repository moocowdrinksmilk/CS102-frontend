<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-200">
      <div
        @click="open = false"
        class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
        x-data="{ open: false }"
      >
        <div
          class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between bg-gray-600"
        >
          <a
            href="#"
            class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >PortNet</a
          >
          <button
            class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{ block: open, hidden: !open }"
          class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto bg-gray-600"
        >
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Overview</a
          >
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline bg-gray-200 text-gray-900"
            href="#"
            >Vessels</a
          >
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Alerts</a
          >
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Contacts</a
          >
          <br />
          <hr />
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Settings</a
          >
          <a
            class="bg-gray-200 text-gray-900 absolute bottom-0 mb-12 ml-12 block px-8 py-2 mt-50 text-sm font-semibold text-gray-100 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Logout</a
          >
        </nav>
      </div>
      <div class="block h-5/6 w-5/6 mx-12 my-12 bg-white p-5">
      <div class="h-20 grid grid-cols-6 grid-flow-col items-center">
          <div class="col-span-2">
              <h1 class="text-xl font-medium">
              Subscribed Vessels
                </h1>
          </div>
          <div class="col-start-4 col-span-1">
              <input type="search" name="" id="" class="border-2 border-gray-500">
          </div>
          <div class="col-start-6 align-center">
              <button type="button" class="bg-blue-700 px-3 py-3 rounded-2xl font-semibold text-white">
                  + Add Vessel
              </button>
          </div>
      </div>
        
      <div class="block h-10 grid grid-cols-5 grid-flow-col gap-4 border-b-2 border-gray-500">
          <div>Vessel Name</div>
          <div></div>
          <div>Full Voyage Name</div>
          <div>Berth Number</div>
          <div>Status</div>
      </div>
      <div class="overflow-auto h-64">
      <div v-for="item in this.vessels">
          <vessel-item
        :vessel_name="item.vessel_name"
        :full_voyage_name="item.full_voyage_name"
        :berth_number="item.berth_number"
        :status="item.status"
        >
        </vessel-item>
      </div>
      </div> 
        
      </div>
    </div>
</template>

<script>
import VesselItem from '../components/VesselItem.vue'
export default {
  components: { VesselItem },
    data() {
        return {
            vessels :[
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },

            ]
        }
    }
}
</script>