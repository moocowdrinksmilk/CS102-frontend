<template>
    <div>
        <div class="w-52 bg-red-300 h-56 mx-6 rounded-3xl px-4 py-4">
            <div>
                {{vessel_name}}
            </div>
            <div>
                {{berth_date}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vessel_name: String,
        berth_date: String
    }
}
</script>