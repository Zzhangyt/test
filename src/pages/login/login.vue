<template>
    <div class="login">
      <div>
        <span>{{$store.state.count}}</span>
      </div>
      <div>
        <button @click="add">add</button>
        <button @click="reduce">reduce</button>
        <button @click="save">save</button>
        <button @click="take">take</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                text:this.$store.state.count,
                count:100
            }
        },
        created() {

        },
        methods:{
            add(){
                this.$store.commit('add',10)
            },
            reduce(){
                this.$store.commit('reduce',5)
            },
            save(){
                this.$store.commit('save',this.$store.state.count)
            },
            take(){
                alert(`值为:${this.$store.state.value}`);
            }
        }
    }
</script>

<style scoped>

</style>
