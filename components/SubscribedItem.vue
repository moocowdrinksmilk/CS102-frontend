<template>
    <div>
        <div class="w-48 bg-gray-400 h-56 mr-8 rounded-3xl px-4 py-4">
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
            <br>
            <div class="mb-1">
                Voy {{voyage_number}}
            </div>
            <div>
                {{
                    berth_date.split("T")[0]
                    
                }}
            </div>
            <div>
                {{
                    berth_date.split("T")[1].split(":")[0] +
                    ":" +
                    berth_date.split("T")[1].split(":")[1] +
                    " Hrs"
                }}
            </div>
            <div>
                {{berth_no}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vessel_name: String,
        berth_date: String,
        voyage_number: String,
        status: String,
        berth_no:String
    }
}
</script>