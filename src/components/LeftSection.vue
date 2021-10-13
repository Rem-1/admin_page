<template>
    <section id="leftSection">
        <ul>
            <li v-for="bike in bicycles"
                :class="bike.status"
                :key="bike.id">
                <ListItem
                    :bike="bike"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import ListItem from "./Left_section_components/ListItem.vue"
import { mapActions, mapState } from 'vuex'

export default {
    name: "LeftSection",
    components: {
        ListItem,
    },
    methods: {
        ...mapActions(['getBikeList']),
    },
    computed:{
        ...mapState(['bicycles'])
    },
    async mounted(){
        await this.getBikeList()
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@300&display=swap');


#leftSection{
    padding-top: 5px;
    position: absolute;
    left: 0;
    max-width: 55%;
    width: 100%;
    box-sizing: border-box;
    bottom: 38px;
    top: 48px;
}

ul{
    list-style: none;
    padding: 0;
    margin-top: 9px;
    font-family: 'Saira', sans-serif;
    width: 100%;
}

li{
    padding: 12px 12px 12px 18px;
    margin: 0 9px 15px 12px;
    border: 2px solid #6FCF97;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #E8E8E8;
}

.Busy{
    border: 2px solid #F2994A;
}

.Unavailable{
    border: 2px solid rgba(235, 87, 87, 0.7);
    background-color: rgba(232, 232, 232, 0.5);
}

.Unavailable .target{
    opacity: 0.5;
}

</style>