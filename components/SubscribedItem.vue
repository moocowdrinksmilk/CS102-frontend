<template>
    <div class="">
        <div @click="openDetailsModal" class="w-nice bg-indigo-100 mr-8 rounded-3xl px-4 py-4 cursor-pointer">
            <div class="text-md font-semibold flex justify-between items-center">
                <div>
                    {{vessel_name}}
                </div>
                <div>
                    <div class="">
                        <div v-if="status == 'BERTHING'" class="flex items-center">
                            <div class="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
                        </div>
                        <div v-if="status == 'ALONGSIDE'" class="flex items-center">
                            <div class="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                        </div>
                        <div v-if="status == 'UNBERTHED'" class="flex items-center">
                            <div class="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-1 mt-2">
                <div class="text-sm text-gray-600">inVoyn: </div> {{voyage_number}}
            </div>
            <div>
                <div class="text-sm text-gray-600">Berth Date: </div>{{
                    berth_date.split("T")[0]
                    
                }}
            </div>
            <div>
                <div class="text-sm text-gray-600">Berth Time: </div>{{
                    berth_date.split("T")[1].split(":")[0] +
                    ":" +
                    berth_date.split("T")[1].split(":")[1] +
                    " Hrs"
                }}
            </div>
            <div>
                <div class="text-sm text-gray-600">Berth No: </div>{{berth_no == 'null' ? '-' : berth_no}}
            </div>
        </div>
    </div>
</template>

<style>
    .w-nice{
        width: 16rem;
        height: 16rem;
    }
</style>

<script>
export default {
    methods:{
        openDetailsModal(){
          this.$emit("openDetailsModal", this.abbrvslm, this.voyage_number)
        }
    },
    props: {
        vessel_name: String,
        berth_date: String,
        voyage_number: String,
        status: String,
        berth_no:String,
        abbrvslm:String
    }
}
</script>