<template>
  <div>
    <div v-if="step== 1">
      <div class="appHeader box-shw-profile-header">
        <div class="left" id="back_arrow">
          <router-link :to="'/Wallet'" class="headerButton goBack">
            <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline" role="img">
            </ion-icon>
          </router-link>
        </div>
        <div class="pageTitle">
          Retirar dinero
        </div>
      </div>
      <div id="appCapsule">
        <div id="wallet_container">
          <div class="section mb-2" style="padding: 0 0px;">
            <div class="card comment-box no-box-shadow">
              <ul class="listview image-listview text no-border-top-bottom">
                <li>
                  <div class="item" href="#">
                    <div class="in">
                      <div>
                        <img src="/menu_icons/rose/loolecoin.svg" style="width:25px;height:25px;" />
                        Saldo CLP
                      </div>
                      <span v-if="load">
                        ${{formatPrice(real_balance)}}
                      </span>
                      <div class="spinner-border text-secondary" role="status" style="font-size:15px;" v-if="!load">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="section full mt-2 mb-2">
            <div class="wide-block pb-1 pt-2 no-border-top-bottom">
              <form>
                <div class="form-group boxed">
                  <div class="input-wrapper">
                    <label class="" for="name5">
                      ¿Cuánto quieres retirar?
                    </label>
                    <money class="form-control" id="inputMoney" style="width: 100%" v-bind="money"
                      v-model="inputs.price">
                    </money>
                    <i class="clear-input">
                      <ion-icon aria-label="close circle" class="md hydrated" name="close-circle" role="img">
                      </ion-icon>
                    </i>
                  </div>
                  <div class="invalid-input">
                    {{inputs.price != 0 && inputs.price < min ? 'El monto debe ser igual o mayor a $10.000'
                      :(inputs.price> real_balance ? 'El monto no puede ser mayor al saldo' :'' )}}
                  </div>
                  <p class="mt-3" style="font-size: 13px">
                    * El monto mínimo a retirar son CLP $10.000
                  </p>
                </div>
              </form>
              <div class="mt-5">
                <button :disabled="inputs.price < min ? true:(inputs.price > real_balance ? true:false)"
                  @click="nextStep" class="btn btn-primary bg-primary-loole btn-block btn-lg rounded" type="submit">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step== 2">
      <div class="appHeader box-shw-profile-header">
        <div class="left" id="back_arrow">
          <a @click="backStep" class="headerButton goBack">
            <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline" role="img">
            </ion-icon>
          </a>
        </div>
        <div class="pageTitle">
          Confirmar retiro
        </div>
      </div>
      <div id="appCapsule">
        <div id="wallet_container">
          <div class="section mb-2" style="padding: 0 0px;">
            <div class="card comment-box no-box-shadow">
              <ul class="listview image-listview text no-border-top-bottom">
                <li>
                  <div class="item" href="#">
                    <div class="in">
                      <div>
                        <img src="/menu_icons/rose/loolecoin.svg" style="width:25px;height:25px;" />
                        Vas a retirar
                      </div>
                      <span v-if="load">
                        ${{formatPrice(value_total)}}
                      </span>
                      <div class="spinner-border text-secondary" role="status" style="font-size:15px;" v-if="!load">
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item" href="#">
                    <div class="in">
                      <div>
                        <img src="/images/logo/isotipo.svg" style="width:25px;height:25px;" />
                        Servicios Loole
                      </div>
                      <span v-if="load">
                        ${{formatPrice(porcent)}}
                      </span>
                      <div class="spinner-border text-secondary" role="status" style="font-size:15px;" v-if="!load">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="section mt-2 mb-2">
            <div class="card comment-box no-box-shadow ">
              <h4 class="card-title">
                Total a retirar
              </h4>
              <div class="text">
                <img src="/menu_icons/rose/loolecoin.svg" style="width:25px;height:25px;" />
              </div>
              <div class="text">
                <h1>
                  ${{formatPrice(value_total)}}
                </h1>
              </div>
            </div>
          </div>
          <div class="section full mt-2 mb-2">
            <div class="wide-block pb-1 pt-2 no-border-top-bottom">
              <div class="mt-5">
                <button @click="nextStep" class="btn btn-primary bg-primary-loole btn-block btn-lg rounded"
                  type="submit">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-if="step == 3">
      <div id="wallet_container">
        <div id="appCapsule">
          <div class="section mt-2 mb-2">
  
            <div class="card comment-box no-box-shadow ">
              <img src="/images/collect_img/money.svg" style="width:100%; height:200px;" />
              <h4 class="card-title"  style="margin-top:20px;"> Solicitud envida</h4>
  
              <div class="text">
  
                Nos encargaremos de tu solicitud, si quieres saber cual es su estado, accede Mi wallet &gt; Estado retiro
  
              </div>
            </div>
            <div class="mt-5">
              <router-link :to="'/Wallet'">
                <button @click="nextStep" class="btn btn-primary bg-primary-loole btn-block btn-lg rounded" type="button">
                  Volver a mi Wallet
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <div class="modal fade dialogbox show" id="modal_confirmation" data-bs-backdrop="static" tabindex="-1" role="dialog"
      aria-modal="true" style="display: none">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="max-width: 600px;max-height: none !important;">
          <div class="modal-header">
            <h5 class="modal-title">
              Confirmar retiro 💸
            </h5>
          </div>
          <div class="modal-body text-start mb-2">

            <div class="col-lg-12 col-md-7 mx-auto">
              <div class="text-center">
                <div class="mb-3 ">

                  Una vez enviada la solicitud no la podrás cancelar, ¿Estás seguro que quieres continuar con el retiro
                  de tu dinero?

                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="btn-inline">
              <a href="#" class="btn text-black" data-bs-dismiss="modal">Cancelar</a>
              <a @click="confirmationWithdrawals" class="btn btn-text-primary">Aceptar</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import { Money } from "v-money";
  export default {
    components: { Money },
    data() {
      return {
        money: {
          decimal: ",",
          thousands: ".",
          prefix: "$ ",
          suffix: "",
          precision: 0,
          masked: false,
        },
        real_balance: 0,
        load: false,
        inputs: {
          price: 0
        },
        min: 10000,
        step: 1,
        porcent: 0,
        value_total: 0,
        formData: new FormData

      }
    },
    created: function () {
      this.getBalance()
    },
    methods: {

      getBalance() {
        axios.get('/balance/looler/withdrawals').then(response => {
          this.real_balance = response.data;
          this.load = true
        })
      },
      confirmationWithdrawals() {

        this.formData.append('amount', parseInt(this.value_total))
        this.formData.append('percent', parseInt(this.porcent))
        this.formData.append('total_amount_retirement', parseInt(this.inputs.price))
        axios.post('/withdrawals/looler/wallet', this.formData).then(response => {
          if (response.data.code == 200) {
            $("#modal_confirmation").modal("hide");
            this.step = 3
          } else {

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
      nextStep() {
        if (this.step == 1) {
          if (this.inputs.price >= this.min && this.inputs.price <= this.real_balance) {
            this.porcent = parseInt(this.inputs.price * 20) / 100;

            this.value_total = parseInt(this.inputs.price) - parseInt(this.porcent);
            this.step = 2
          }
        } else {
          if (this.step == 2) {
            $("#modal_confirmation").modal("show");

          }
        }

      },
      backStep() {
        this.step = 1
      }
    }
  }
</script>

<style>

</style>