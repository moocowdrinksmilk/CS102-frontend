<template>
  <div class="flex flex-col md:flex-row md:min-h-screen w-full bg-gray-200">
    <SideBar />
    <div class="w-full ml-56">
      <div class="text-3xl font-bold py-6 pl-12 border-b-2 border-gray-400">
        Settings
      </div>
      <div class="">
        <div class="flex h-32">
          <div class="bg-red-500 h-full items-center">Profile</div>
        </div>
        <div class="">
          <div class="flex justify-between px-6 h-20 items-center">
            <div>Change in Berthing Date</div>
            <Toggle :isChecked="settings.btrDtAlert"/>
          </div>
          <div class="flex justify-between px-6 h-20 items-center">
            <div>Change in Berth Number</div>
            <Toggle :isChecked="this.settings.berthNAlert"/>
          </div>
          <div class="flex justify-between px-6 h-20 items-center">
            <div>Change in Vessel Status</div>
            <Toggle :isChecked="this.settings.statusAlert" v-model="checked" />
          </div>
          <div class="flex justify-between px-6 h-20 items-center">
            <div>Change in Average Speed</div>
            <Toggle :isChecked="this.settings.avgSpeedAlert"/>
          </div>
          <div class="flex justify-between px-6 h-20 items-center">
            <div>Change in Distance to go</div>
            <Toggle :isChecked="this.settings.distanceToGoAlert"/>
          </div>
          <div class="flex justify-between px-6 h-20 items-center">
            <div>Change in Max Speed</div>
            <Toggle :isChecked="this.settings.maxSpeedAlert"/>
          </div>
        </div>
        <div class="flex justify-end px-8">
            <button class="bg-gray-400 p-4 rounded-2xl">
                Save Changes
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            settings: {}        
        }
    },
    methods:{
        
    },
    async beforeMount(){
        let username = "";
        if(process.client){ 
            username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name
        }
        this.settings = await this.$http.$get("http://localhost:8080/user/get/" + username);
        console.log(this.settings);
    },
    
}
</script>