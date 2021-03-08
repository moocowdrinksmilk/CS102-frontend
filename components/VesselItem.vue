<template>
    <div class="grid grid-cols-5 grid-flow-col gap-4 py-5 border-b-2 border-gray-500">
        <div class="col-span-2">
            {{vessel_name}}
        </div>
        <div class="col-start-3">
            {{full_voyage_name}}
        </div>
        <div class="col-start-4">
            {{berth_number}}
        </div>
        <div class="col-start-5">
            {{status}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        vessel_name: String,
        full_voyage_name: String,
        berth_number: String,
        status: String
    }
}
</script>