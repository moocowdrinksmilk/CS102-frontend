<template>
<div>
    <div class="absolute h-full w-full opacity-25 bg-gray-200 z-40 flex justify-center"></div>

    <div class="absolute h-1/2 w-screen z-50 flex justify-center">
        <div class="text-xl text-black bg-blue-300 mt-48 px-12 py-12 w-2/5 rounded-lg">
            {{this.abbrvslm}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    prop:{
        abbrvslm:String,
        voyageName:String
    },
    mounted(){
        console.log(this.abbrvslm);
    }
}
</script>