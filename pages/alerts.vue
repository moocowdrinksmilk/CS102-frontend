<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <SideBar/>
        <div class="w-full bg-white ml-56 px-20">
            <div class="text-5xl my-8">Alerts</div>
            <div v-for="(item, index) in alerts" :key="index" >
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            alerts:[]
        }
    },
    async beforeMount(){
        let username = ""

      if(process.client){ 
            username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name
        }
        this.alerts = await this.$http.$post("http://localhost:8080/alert/get",{
            "username":username
      })
    }
}
</script>