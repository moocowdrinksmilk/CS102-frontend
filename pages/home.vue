<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <SideBar class=""/>
    <div class="w-full bg-gray-200 ml-64">
      <div class="px-20">
        <h1 class="text-5xl">
          Good 
          <span>Morning</span>
          <span>Shaun</span>
        </h1>
        <div class="grid grid-cols-3 gap-24 text-left mt-8">
          <div class="bg-gray-400 py-3 px-3 shadow-lg rounded-md">
            <span class="text-3xl">
              {{berthing}}
            </span>
            <div class="text-xs  font-bold">
               <span class="text-3xl">Berthing</span>
            </div>
            
          </div>
          <div class="bg-gray-400 py-3 px-3 shadow-lg rounded-md">
            <!-- <h3 class="text-xl">
              Alongside
            </h3> -->
            <span class="text-3xl font-bold">
              {{alongSide}}
            </span>
            <div class="text-xs">
             <span class="text-3xl">Alongside</span>
            </div>
          </div>
          <div class="bg-gray-400 py-3 px-3 shadow-lg rounded-md">
            <!-- <h3 class="text-xl">
              Unberthed
            </h3> -->
            <span class="text-3xl font-bold">
              {{unBerthed}}
            </span>
            <div class="text-xs">
               <span class="text-3xl">Unberthed</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        vesselList: [],
        berthing: 0,
        alongSide: 0,
        unBerthed: 0
      }
    },
    mounted(){
      // console.log(this.vesselList);
      // for(let i = 0; i<this.vesselList.length; i++){
      //   if(this.vesselList.status == "BERTHING"){
      //     this.berthing++;
      //   }
      //   if(this.vesselList.status == "ALONGSIDE"){
      //     this.alongSide++;
      //   }
      //   if(this.vesselList.status == "UNBERTHED"){
      //     this.unBerthed++;
      //   }
      // }
    },
    async fetch() {
      this.$http.setHeader("Accept", "application/json")
      this.$http.setHeader('Content-Type', 'application/json')
      this.vesselList = await this.$http.$get('http://localhost:8080/vessel/getall')
      console.log(this.vesselList.length);
      for(let i = 0; i<this.vesselList.length; i++){
        // console.log(this.vesselList[i]);
        if(this.vesselList[i].status == "BERTHING"){
          this.berthing++;
        }
        if(this.vesselList[i].status == "ALONGSIDE"){
          this.alongSide++;
        }
        if(this.vesselList[i].status == "UNBERTHED"){
          this.unBerthed++;
        }
      }
    }
}
</script>