<template>
    <section>
        <LeftSection/>
        <div class="vertical"></div>
        <RightSection 
            id="rightSection"
        />
    </section>
    
</template>

<script>
import LeftSection from "./LeftSection.vue"
import RightSection from "./RightSection.vue"

export default {
    name: "MainSection",
    components: {
        LeftSection,
        RightSection,
    }
}
</script>

<style scoped>

.vertical{
    height: 100%;
    border-left: #C4C4C4 2px solid;
    position: fixed;
    left: 55%;
    top: 0;
    z-index: -1;
}

#rightSection{
    position: fixed;
    right: 0;
    top: 48px;
}
</style>