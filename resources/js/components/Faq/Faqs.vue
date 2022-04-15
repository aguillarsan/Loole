<template>
  <div>
    <div class="appHeader box-shw-profile-header">
      <div class="left" id="back_arrow">
        <router-link :to="'/Home'" class="headerButton goBack">
          <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle text-black">Centro de ayuda</div>
    </div>
    <div id="appCapsule">
      <div id="faq_loole">
        <div class="section full ">
          <div class="accordion no-border-top-bottom " id="accordionExample1">
            <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  :data-bs-target="'#accordion'+index" aria-expanded="false">
                  {{faq.title_faq}}
                </button>
              </h2>
              <div :id="'accordion'+index" class="accordion-collapse collapse"
                :data-bs-parent="'#accordionExample'+index" style="">
                <div class="accordion-body">
                  {{faq.description_faq}}
                </div>
              </div>
            </div>






          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["usuario"],
    data() {
      return {
        faqs: [],
      };
    },
    created: function () {
      this.getFaqs()
    },
    methods: {
      getFaqs() {
        axios.get('/faqs/data').then(response => {
          this.faqs = response.data
        })
      }
    },
  };
</script>