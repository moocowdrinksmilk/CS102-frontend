<template>
  <div class="flex flex-col md:flex-row md:min-h-screen w-full">
    <SideBar />
    <div class="w-full ml-56">
      <div class="text-3xl font-bold py-6 pl-12 border-b-2 border-gray-400">
        Settings
      </div>
      <div class="">
        <div class="px-12">
          <div class="flex justify-between px-6 h-16 items-center">
            <div>Change in Berthing Date</div>
            <Toggle :isChecked="settings.btrDtAlert" :setting="'btrdt'" @changeSettings="editSettings('btrDtAlert')"/>
          </div>
          <div class="flex justify-between px-6 h-16 items-center">
            <div>Change in Berth Number</div>
            <Toggle :isChecked="this.settings.berthNAlert" @changeSettings="editSettings('btrDtAlert')"/>
          </div>
          <div class="flex justify-between px-6 h-16 items-center">
            <div>Change in Vessel Status</div>
            <Toggle :isChecked="this.settings.statusAlert" v-model="checked" @changeSettings="editSettings('statusAlert')"/>
          </div>
          <div class="flex justify-between px-6 h-16 items-center">
            <div>Change in Average Speed</div>
            <Toggle :isChecked="this.settings.avgSpeedAlert" @changeSettings="editSettings('avgSpeedAlert')"/>
          </div>
          <div class="flex justify-between px-6 h-16 items-center">
            <div>Change in Distance to go</div>
            <Toggle :isChecked="this.settings.distanceToGoAlert" @changeSettings="editSettings('distanceToGoAlert')"/>
          </div>
          <div class="flex justify-between px-6 h-16 items-center">
            <div>Change in Max Speed</div>
            <Toggle :isChecked="this.settings.maxSpeedAlert" @changeSettings="editSettings('maxSpeedAlert')"/>
          </div>
          <div class="flex justify-between px-6 h-16 items-center">
            <div>Opt in for email</div>
            <Toggle :isChecked="this.settings.emailOptIn" @changeSettings="editSettings('emailOptIn')"/>
          </div>
        </div>

        
        
        </div>
        <form action="">
          <div class="flex justify-end px-8 mt-6">
            <button class="bg-gray-400 p-4 rounded-2xl" @click="saveChanges" type="submit">Save Changes</button>
          </div>
        </form>

        <div class="border-b-2 border-gray-400 mt-4"></div>
        <div class="px-12">
          <div class="text-3xl">
            User Account
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username:"",
      settings:{},
    };
  },
  methods: {
      async saveChanges(){
          await this.$http.$post("http://localhost:8080/user/config", this.settings)
      },
      editSettings(setting){
          
          this.settings[setting] = !this.settings[setting];
          // console.log(this.settings);
          console.log(this.settings[setting]);
      }
  },
  async beforeMount() {
    let username = "";
    if (process.client) {
      username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name;
    }
    this.username = username
    this.settings = await this.$http.$get(
      "http://localhost:8080/user/get/" + username
    );
    console.log(this.settings);
  },
};
</script>