<template>
  <div class="hello">
   
     <div class="row" style="margin-left:30px">
    <div class="col-md-10">
      VARIABLE FOR KE
     <div id="m" class="text-left" variant="success" v-for="(i, d) in var_data" :key="d" :style="'width:' + i.value +'%'">
       {{i.year}} - {{i.value}}
    </div>

  </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'Home',


data: function() {
    return {

      var_data: []

    };
},

 methods: {

   loadData() {
 
      //var vm =  this;

      this.$axios
        .get(
          process.env.VUE_APP_API_PATH +
            "assess/var"
        )
        .then(res => {
          this.var_data = res.data.resp.data;
        });

   }
 
 },

 created(){

   this.loadData();

 }





};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#m {background:#ffc107; margin-bottom:3px;}
</style>


