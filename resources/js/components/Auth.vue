<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    mounted() {
       this.getRefrescarUsuarioAutenticado();
    },
    created: function () {
      let self = this;
      this.$eventBus.$on('display-alert', function (type, message) {
        self.alert(type, message);
      });
    },
    computed: {
      currentRoute() {
        return this.$route.name;
      },
    },
    methods: {
      alert(type, message) {
        Vue.$toast.open({
          message: message,
          type: type,
          position: 'top',
          duration: 2000

        });
      },
      getRefrescarUsuarioAutenticado() {
            axios.get('authUser').then(response=>{
              if(response.data){
                  localStorage.clear();
                  axios.post("/authenticate/logout").then(response=>{
                    location.reload();
                    return
                 })
              }else{

              }
            })
              
           
        
      },
    }
  };
</script>

<style>
</style>