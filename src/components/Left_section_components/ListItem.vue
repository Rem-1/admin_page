<template>
    <div class="right-one">
        <div class="top-div target"><span>{{ bike.name }}</span> - {{ bike.type }} ({{ bike.color }})</div>
        <div class="target" id="forId">ID:{{ bike.id }}</div>
        <div class="stable">STATUS: 
            <Selector
                :bike="bike"
                @change="changeStatus($event.target.value, bike._id)"
            />
        </div>
    </div>
    <div class="left-one target">
        <button @click="deleteBike(bike._id)">x</button>
        <div>{{ bike.price }} UAH/hr</div>
    </div>
</template>

<script>
import Selector from "./Selector.vue"
import PostService from '../../PostService.js'
import { mapActions } from 'vuex'

export default {
    name:"ListItem",
    components:{
        Selector,
    },
    props:{
        bike: {
            type: Object,
            required: true
        },
    },
    methods:{
        ...mapActions(['deleteBike', 'getBikeList']),
        async changeStatus(target, id){
            let data = {};
            data.status = target
            await PostService
            .updatePost(id, data)

            this.getBikeList()
        },
    }
}
</script>

<style scoped>

.right-one span{
    font-weight: bolder;
}

.top-div{
    text-transform: uppercase;
}

#forId{
    font-size: 10px;
    color: #717171;
}

.left-one{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}

button{
    text-transform: uppercase;
    font-weight: bolder;
    color: firebrick;
    padding: 0.1rem 0.5rem;
    box-sizing: border-box;
    border: 2px #4e4e4e solid;
    border-radius: 5px;
}

button:hover{
    background-color: #4e4e4e;
    color: #f4f4f4;
}

button:active{
    background-color: firebrick;
}

</style>