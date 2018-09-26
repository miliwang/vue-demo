<template>
    <div>
        <span :title="message">
         {{message}}
         <!-- message  -->
        </span>
    </div>
</template>
<script>
    export default{
        name: 'Test',
        data() {
           return{
               message: "页面加在于" + new Date().toLocaleString()
            // message: "页面加载" + new Date().toLocaleString()
           }
        }
    }
</script>
<style scoped>

</style>