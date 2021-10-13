<template>
    <section id="rightSection">
        <div id="wrapper">
            <input v-model="name_input"
                placeholder="Name"
                type="text"
                :class="{validInput: (name_input.length >= 5)}">
            <input v-model="type_input" 
                placeholder="Type" 
                type="text" 
                :class="{validInput: (type_input.length >= 5)}">
            <input v-model="color_input" 
                placeholder="Color" 
                type="text" 
                :class="{validInput: (color_input.length >= 3)}">
            <input v-model="wheel_size_input" 
                placeholder="Wheel size" 
                type="number"
                oninput="this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                :class="{validInput: (wheel_size_input.toString().length >= 2)}">
            <input v-model="price_input" 
                placeholder="Price" 
                type="number"
                oninput="this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                :class="{validInput: (price_input.toString().length >= 2)}">
            <input v-model="id_input" 
                placeholder="ID (slug): ХХХХХХХХХХХХХ" 
                type="text" 
                :class="{validInput: (id_input.length >= 5)}">
            <textarea v-model="description_input" 
                maxlength="100" id="long" 
                placeholder="Description"></textarea>
            <button v-on:click="addToDB">SAVE</button>
            <button v-on:click="clearField">CLEAR</button>
            <div id="wrapOne">
                <div id="messageOne" v-show="error">{{  message  }}</div>
                <div id="messageTwo" v-show="success">{{  message  }}</div>
            </div>
        </div>
        <hr>
        <div id="stat">
            <h3>STATISTICS</h3>
            <span>Total bikes : <b>{{ this.getTotalBikes }}</b></span>
            <span>Available Bikes : <b>{{ this.getAvailableBikes }}</b></span>
            <span>Booked Bikes : <b>{{ this.getBookedBikes }}</b></span>
            <span>Average bike cost : <b>{{ this.getAveregeCost }}</b> UAH/hr.</span>
        </div>
    </section>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            name_input: "",
            type_input: "",
            color_input: "",
            wheel_size_input: "",
            price_input: "",
            id_input: "",
            description_input: "",
            error: false,
            success: false,
            message: ""
        }
    },
    methods:{
        ...mapActions(['addBike']),
        isValid(str, num){
            return (str.length >= num) ? true : false
        },
        clearField(){
            this.name_input = ""
            this.type_input = ""
            this.color_input = ""
            this.wheel_size_input = ""
            this.price_input = ""
            this.id_input = ""
            this.description_input = ""
            this.error = false
        },
        async addToDB(){
            let data = {};
            this.isValid(this.name_input, 5) ? (data.name = this.name_input) : this.error = true;
            this.isValid(this.type_input, 5) ? (data.type = this.type_input) : this.error = true;
            this.isValid(this.color_input, 3) ? (data.color = this.color_input) : this.error = true;
            this.isValid(this.wheel_size_input.toString(), 2) ? (data.wheel_size = this.wheel_size_input) : this.error = true;
            this.isValid(this.price_input.toString(), 2) ? (data.price = this.price_input) : this.error = true;
            this.isValid(this.id_input, 5) ? (data.id = this.id_input) : this.error = true;
            this.description_input ? data.description = this.description_input : false;
            if(Object.keys(data).filter(item => item != "description").length >= 6){
                this.addBike(data)
                this.clearField()
                this.success = true
                this.message = 'Item added!'
                setTimeout(()=>{
                    this.success = false;
                },3000)
            }else{
                this.error = true;
                this.message = 'Please fill empty fields!'
            }
        }
    },
    computed:{
        ...mapGetters([
            'getTotalBikes',
            'getAvailableBikes',
            'getBookedBikes',
            'getAveregeCost'])
        
    }
}

</script>

<style scoped>

#rightSection{
    position: absolute;
    right: 0;
    bottom: 38px;
    top: 48px;
    width: 44%;
    margin-top: 10px;
}

#wrapper{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 40px) 85px 40px;
}

input{
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    min-height: 30px;
    height: 30px;
    margin: 0 11px 10px 0;
    background-color: #E8E8E8;
    color: #4e4e4e;
    padding-left: 16px;
    font-family: Saira;
    -moz-appearance: textfield;
}

input:focus-within{
    outline: rgb(194, 70, 70) 2px solid;
}

#long{
    grid-column: 1 / 3;
    background-color: #E8E8E8;
    color: #717171;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    resize: none;
    padding-top: 10px;
    padding-left: 16px;
    font-family: Saira;
    font-size: 14px;
    font-weight: 500;
}

#long:focus-within{
    outline: rgb(194, 70, 70) 2px solid;
}

#wrapOne{
    position: relative;
    margin: 0 15px 0 5px;
}

#messageOne{
    width: 100%;
    font-family: Saira;
    font-size: 14px;
    border-radius: 5px;
    background-color: rgb(211, 104, 90);
    text-align: center;
    position: absolute;
    margin-top: -80px;
    padding: 6px 0 6px 0;
    color: #FFFFFF;
    letter-spacing: 0.6px;
}

#wraptwo{
    position: relative;
    margin: 0 15px 0 15px;
}

#messageTwo{
    width: 100%;
    font-family: Saira;
    font-size: 14px;
    border-radius: 5px;
    background-color: rgb(120, 224, 143);
    text-align: center;
    position: absolute;
    margin-top: -80px;
    padding: 6px 0 6px 0;
    color: #FFFFFF;
    letter-spacing: 0.6px;
}

button{
    margin-right: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #696969;
    color: #FFFFFF;
    letter-spacing: 2px;
    font-family: Saira;
    cursor: pointer;
}

button:hover{
    background-color: #776e6e;
}

button:active{
    background-color: #5f5656
}

hr{
    border: #C4C4C4 1px solid;
}

#stat{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Saira;
}

#stat h3{
    margin: 0;
}

#stat span{
    margin-top: 2px;
}

.validInput:focus-within{
    outline: 2px solid rgb(103, 196, 95);
}
</style>
