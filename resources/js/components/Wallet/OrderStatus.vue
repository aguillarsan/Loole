<template>
  <div>
    <div class="appHeader box-shw-profile-header">
      <div class="left" id="back_arrow">
        <router-link :to="'/Wallet'" class="headerButton goBack">
          <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline" role="img">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle">
        Estado de retiro
      </div>
    </div>
    <div id="appCapsule">
      <div id="content_responseive">
        <div class="section full mt-2">
          <div class="section-title">Monto Solicitado</div>
          <div class="content-header mb-05 text-black" style="font-size:18px;">
            <img src="/menu_icons/rose/loolecoin.svg" style="width:25px;height:25px;" /> CLP ${{
            formatPrice(order.amount)}}
          </div>
          <div class="wide-block no-boreder-bottom">
            <!-- timeline -->
            <div class="timeline ">
              <div class="item" >
                <div class="dot" :style="order.state_withdrawals_id != 4 ? 'background:#F8C51C':(order.state_withdrawals_id == 4 ? 'background:#26CE2F':'')"></div>
                <div class="content">
                  <h4 class="title">Solicitud de retiro enviada</h4>
                  <div class="text"> {{formatDate(order.created_at)}}</div>
                </div>
              </div>
              <div class="item" v-if="order.withdrawls_proces_date">
                <div class="dot " :style="order.state_withdrawals_id != 4 ? 'background:#F8C51C':(order.state_withdrawals_id == 4 ? 'background:#26CE2F':'')"></div>
                <div class="content">
                  <h4 class="title"> Solicitud en proceso</h4>
                  <div class="text">
                      {{formatDate(order.withdrawls_proces_date)}}
                  </div>
                </div>
              </div>
              <div class="item" v-if="order.withdrawls_aprobe_date">
                <div class="dot " :style="order.state_withdrawals_id != 4 ? 'background:#F8C51C':(order.state_withdrawals_id == 4 ? 'background:#26CE2F':'')"></div>
                <div class="content">
                  <h4 class="title"> Solicitud de retiro aprobada</h4>
                  <div class="text">   {{formatDate(order.withdrawls_aprobe_date)}}</div>
                </div>
              </div>
              <div class="item" v-if="order.withdrawls_finish_date">
                <div class="dot " :style="order.state_withdrawals_id != 4 ? 'background:#F8C51C':(order.state_withdrawals_id == 4 ? 'background:#26CE2F':'')"></div>
                <div class="content">
                  <h4 class="title"> Dinero retirado</h4>
                  <div class="text">{{formatDate(order.withdrawls_finish_date)}}</div>
                </div>
              </div>
            </div>
            <!-- * timeline -->
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        order: []
      }
    },
    created: function () {
      this.getStatusOrder()
   
    },
    methods: {
      getStatusOrder() {
        axios.get('/money/order/status/'+this.$route.params.order).then(response => {
          this.order = response.data

        })
      },
      formatPrice(value) {
        parseInt(value)
        if (value % 1 == 0) {

          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        } else {
          let val = (value / 1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }



      },

      formatDate(date) {

        return moment(date).format('DD/MM/YYYY');

      }
    }

  }
</script>