<template>
  <div>
    <div class="appHeader box-shw-profile-header">
      <div class="left" id="back_arrow">
        <router-link :to="'/home'" class="headerButton goBack">
          <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle">Notificaciones</div>
    </div>

    <div id="appCapsule">
      <div id="notifications_content">
        <ul class="listview image-listview media mb-2 no-border-top-bottom">
          <li v-for="notification in notifications" @mouseover="updateNotification(notification)" class="hover_link"
            @click="goToNotification(notification)">
            <div href="#" class="item">
              <div class="imageWrapper">
                <ion-icon class="text-danger" style="font-size: 48px;"
                  v-if="notification.type_notification_id == 5 || notification.type_notification_id == 6 "
                  name="close-circle-outline"></ion-icon>
                <img v-if="notification.type_notification_id == 1 || notification.type_notification_id == 4 "
                  :src="notification.user.profile_image" alt="image" class="imaged w48 rounded">
                <img v-if="notification.type_notification_id == 2 || notification.type_notification_id ==  3"
                  src="/images/notification/wallet.svg" alt="image" class="imaged w48 rounded">




              </div>
              <div class="in">
                <div id="contain_data_noification">
                  <div class="section-title text">{{notification.type_notification.type_notification}}
                  </div>
                  <div class="text">{{notification.message}}</div>
                  <div class="text-muted"
                    v-if="actualy_date.diff(notification.created_at,'days') == 0 && actualy_date.diff(notification.created_at,'minute') >= 60">
                    Hace {{actualy_date.diff(notification.created_at,'hours')}} hrs
                  </div>
                  <div class="text-muted"
                    v-if="actualy_date.diff(notification.created_at,'minute') < 60 &&  actualy_date.diff(notification.created_at,'minute') >= 1">
                    Hace {{actualy_date.diff(notification.created_at,'minute')}} min
                  </div>
                  <div class="text-muted" v-if="actualy_date.diff(notification.created_at,'days') >= 1">
                    Hace {{actualy_date.diff(notification.created_at,'days')}} días
                  </div>
                  <div class="text-muted" v-if="actualy_date.diff(notification.created_at,'minute') < 1">
                    Hace {{actualy_date.diff(notification.created_at,'seconds')}} s
                  </div>
                </div>
                <span v-if="notification.active == 1" class="badge badge-danger badge-empty"></span>
              </div>
            </div>
          </li>

        </ul>
        <infinite-loading :identifier="infiniteIdNotificaction" @infinite="infiniteHandlerNotification"
          style="margin-top: 15px">
          <div class="text-black popins" slot="no-more">
            No hay más notificaciones
          </div>
          <div slot="no-results popins">
            No hay más notificaciones
          </div>

        </infinite-loading>
      </div>
    </div>
  </div>

</template>

<script>
  Vue.component('InfiniteLoading', require('vue-infinite-loading'));
  import moment from 'moment';

  export default {
    props: ["usuario"],
    data() {
      return {
        notifications: [],
        infiniteIdNotificaction: +new Date(),
        page: 1,
        actualy_date: moment(),

      }
    },
    methods: {
      infiniteHandlerNotification($state) {
        axios.get(`/notifications/user?page=${this.page}`).then(response => {
          let data = response.data.data

          if (data.length) {
            this.page += 1;
            this.notifications = this.notifications.concat(data);
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      },
      goToNotification(notification) {
        if (notification.type_notification_id == 2) {
          this.$router.push('/Wallet');
        } else {
          if (notification.type_notification_id == 3) {
            this.$router.push('/Wallet');
          }
        }
      },
      updateNotification(notification) {

        let elementIndex = this.notifications.findIndex((obj => obj.id == notification.id));
        this.notifications[elementIndex].active = 0;
        let formData = new FormData
        formData.append('notification_id', notification.id)
        formData.append('active', 0)
        axios.post('/updateNotifiaction', formData).then(response => {
          this.$eventBus.$emit('update-notification', response.data);
          this.$eventBus.$emit('update-notification-home', response.data);


        })

      }
    },
  };
</script>

<style>
</style>