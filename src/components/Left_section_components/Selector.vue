<template>
    <select 
        :bike="bike"
        v-model="selected">
        <option
            v-for="stat in statuses"
            :key="stat">
                {{ stat }}
        </option>
    </select>
</template>

<script>
export default {
    name: "Selector",
    props: {
        bike: Object,
    },
    data(){
        return{
            statuses: [
                "Available",
                "Unavailable",
                "Busy",
            ],
            selected: this.bike.status
        }
    },
}
</script>