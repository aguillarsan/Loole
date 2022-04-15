<template>
  <div>
    <div class="appHeader box-shw-profile-header">
      <div class="left" id="back_arrow">
        <router-link :to="'/home'" class="headerButton goBack">
          <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline" role="img">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle">
        Movimientos
      </div>
    </div>
    <div id="appCapsule">
      <div id="wallet_container">
        <div class="section mb-2">
          <div class="card comment-box no-box-shadow" style="    background: transparent;" v-if="usuario.role_id == 2">
            <div>
              <img src="/menu_icons/rose/loolecoin.svg" style="width:35px;height:35px;" />
              CLP

            </div>
            <h1 class="card-title mt-1" style="font-size:26px;">
              <strong v-if="load">
                ${{money == null ? 0 : formatPrice(money)}}
              </strong>
              <div v-if="!load" style="font-size:15px;" class="spinner-border text-secondary" role="status"></div>
            </h1>
            <div class="text mt-3">
              <router-link :to="'/Withdrawals'">
                <button class="btn btn-primary rounded" v-if="money != null && !withdrawals_request ">

                  Solicitar retiro
                </button>
              </router-link>
              <div v-if="withdrawals_request">
                <router-link
                  :to="{ path:`/OrderStatus/`+withdrawals_request.id, params: {order:withdrawals_request.id}} ">
                  <button class="btn btn-outline-secondary rounded ">
                    Ver estado de retiro
                  </button>
                </router-link>
              </div>

            </div>
          </div>
        </div>
        <div class="listview-title mt-2">
          <h3>
            Últimos movimientos
          </h3>
        </div>
        <ul class="listview image-listview no-border-top-bottom " style="padding-right: 20px;">
          <li v-for=" movement in  movements" v-if="usuario.role_id == 2" @click="seeOrderSatatus(movement)" :class="movement.type_movement_id == 2 ? 'hover_link':''">
            <div class="item">
              <img alt="image" class="image" :src="movement.suscriptorimg"
                v-if="usuario.role_id == 2 && movement.type_movement_id == 1" />
              <img alt="image" class="image" :src="movement.loolerimg"
                v-if="usuario.role_id == 2 && movement.type_movement_id == 2" />


              <div class="in">
                <div>
                  {{movement.type_movement}}
                  <footer>{{formatDate(movement.created_at)}}</footer>

                </div>
                <span :class="movement.type_movement_id == 1 ? 'text-secondary':'text-danger'">
                  {{movement.type_movement_id == 1 ? '+ $'+
                  formatPrice(movement.movement_amount):(movement.type_movement_id == 2 ? '- $'+
                  formatPrice(movement.movement_amount):'')}}
                </span>
              </div>
            </div>


          </li>
          <li v-for=" movement in  movements" v-if="usuario.role_id == 3">
            <div class="item">

              <img alt="image" class="image" :src="movement.profile_image" />



              <div class="in">
                <div>
                  {{movement.type_movement}}
                  <footer>{{formatDate(movement.created_at)}}</footer>

                </div>
                <span class="text-black">
                  ${{formatPrice(movement.movement_amount)}}

                </span>
              </div>
            </div>


          </li>
          <infinite-loading :identifier="infiniteIdMovements" @infinite="infiniteHandlerMovements">
            <div class="white" slot="no-more">
              No hay más movimientos
            </div>
            <div slot="no-results" class="white">
              No hay más movimientos
            </div>

          </infinite-loading>
          <div v-if="movements.length == 0" class="text-black center" style="text-align: center">No hay movimientos
            registrados</div>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  Vue.component("InfiniteLoading", require("vue-infinite-loading"));
  import moment from 'moment';
  export default {
    props: ["usuario"],
    data() {
      return {
        money: null,
        movements: [],
        infiniteIdMovements: +new Date(),
        page: 1,
        withdrawals_request: null,
        load: false

      }
    },
    created: function () {
      this.getInforMovementsUser();
    },
    methods: {
      getInforMovementsUser() {
        axios.get('/wallet/data/movements').then(response => {

          this.withdrawals_request = response.data.withdrawals_request;
          if (this.usuario.role_id == 2) {
            for (var i = 0; i < response.data.money.length; i++) {
              let data = response.data.money[i]

              this.money = data.money



            }

          }
        })
      },
      infiniteHandlerMovements($state) {


        axios.get(`/wallet/list/movements?page=${this.page}`).then(response => {
          let data = response.data.data

          if (data.length) {
            this.page += 1;
            this.movements = this.movements.concat(data);
            this.load = true
            $state.loaded()
          } else {
            this.load = true
            $state.complete()
          }
        })

      },
      formatPrice(value) {
        parseInt(value);
        if (value % 1 == 0) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
          let val = (value / 1).toFixed(2).replace(".", ",");
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
      },
      formatDate(date) {

        return moment(date).format('DD/MM/YYYY');

      },
      seeOrderSatatus(movement){
        if(movement.type_movement_id == 2){
           window.location.replace('/OrderStatus/'+movement.withdrawals_id)
        }
      }

    }
  };
</script>

<style>
</style>