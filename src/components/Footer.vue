<template>
    <footer>
        <span>Developer: </span>
        <span id="secondSpan">Meleshko Maksym</span>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
    footer{
        background-color:#696969;
        text-align: right;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    span{
        font-family: 'Saira', sans-serif;
        color: #CBCACA;
        font-size: 24px;
    }

    #secondSpan{
        margin-right: 10px;
        color: #E8E8E8;
    }
</style>