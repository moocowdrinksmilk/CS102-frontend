<template>
    <div class="grid grid-cols-7 my-6 text-center items-center border-2 py-2">
        <div>{{this.abbrvslm}}</div>
        <div class="px-4">
            <div class="text-gray-500 line-through"> {{before.btrdt}} </div> 
            <div class="text-indigo-700 font-bold"> {{after.btrdt}} </div>
        </div>
        <div class="px-4">
            <div class="text-gray-500 line-through"> {{before.berthn}} </div> 
            <div class="text-indigo-700 font-bold"> {{after.berthn}} </div>
        </div>
        <div class="px-4">
            <div class="text-gray-500 line-through"> {{before.status}} </div> 
            <div class="text-indigo-700 font-bold"> {{after.status}} </div>
        </div>
        <div class="px-4">
            <div class="text-gray-500 line-through"> {{before.avg_speed == null ? '-' : before.avg_speed}} </div> 
            <div class="text-indigo-700 font-bold"> {{after.avg_speed == null ? '-' : after.avg_speed}} </div>
        </div>
        <div class="px-4">
            <div class="text-gray-500 line-through"> {{before.distance_to_go == null ? '-' : before.distance_to_go}} </div> 
            <div class="text-indigo-700 font-bold"> {{after.distance_to_go == null ? '-' : after.distance_to_go}} </div>
        </div>
        <div class="px-4">
            <div class="text-gray-500 line-through"> {{before.max_speed == null ? '-' : before.max_speed}} </div> 
            <div class="text-indigo-700 font-bold"> {{after.max_speed == null ? '-' : after.max_speed}} </div>
        </div>
    </div>
</template>

<<script>
export default {
    data(){
        return{
            before : {},
            after : {}
        }
    },
    props:{
        abbrvslm:String,
        invoyn:String
    },
    async beforeMount() {
        this.before = await this.$http.$post("http://localhost:8080/vessel/get-vessel-previous-details", {
            "abbrVslM" : this.abbrvslm,
            "inVoyN" : this.invoyn
        })

        this.after = await this.$http.$post("http://localhost:8080/vessel/get-vessel-current-details", {
            "abbrVslM" : this.abbrvslm,
            "inVoyN" : this.invoyn
        })
    },
}
</script>