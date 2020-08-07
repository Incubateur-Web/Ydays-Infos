<template>
    <div class="card">
        <p>{{ postTitle }}</p>
        <p>{{ role }}</p>
    </div>
</template>
<style scoped>
.card {
    width: calc( 50% - 22px);
    border: 1px solid red;
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    display: inline-block;
}
p:first-of-type{
    font-size: 30px;
}
p:last-of-type{
    color: grey;
}
</style>
<script>
    export default {
        props: ['postTitle'],
        data () {
            return {
                name: 'Alban Pierson',
                role: 'Coucou'
            }
        }
    }
</script>
