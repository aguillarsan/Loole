<template>
    <div>
        <div class="logo-load-center " v-if="load">
            <img class="animate-flicker" src="/images/img_0.png"/>
        </div>
        <div v-if="!load">
            <div class="appHeader box-shw-profile-header">
                <div class="left" id="back_arrow">
                    <router-link :to="'/home'" class="headerButton goBack">
                        <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline" role="img">
                        </ion-icon>
                    </router-link>
                </div>
                <div class="pageTitle">
                    Publicar
                </div>
            </div>
            <div id="appCapsule">
                <div id="publish_post">
                    <div class="section full mt-3 mb-3">
                        <div class="preview-img-post-looler" style="">
                            <div :key="key" v-for="(image, key) in files">
                                <div :id="'img' + key" v-if="image.type.match('image.*')">
                                    <image :src="read(image)">
                                    </image>
                                    <div :style="{ backgroundImage: 'url(' + read(image) + ')' }" class="view-img-loole-post-upload">
                                    </div>
                                    <div class="btn_close_img_post_add">
                                        <a @click="removefile(key)">
                                            <ion-icon aria-label="star-outline" class="md hydrated" name="trash-outline" role="img" style="font-size: 22px">
                                            </ion-icon>
                                        </a>
                                    </div>
                                </div>
                                <div :id="'video' + key" v-if="image.type.match('video.*')">
                                    <video :ref="'video'" class="view-img-loole-post-upload" controls="">
                                        <source :src="read(image)">
                                        </source>
                                    </video>
                                    <div @click="removefile(key)" class="btn_close_img_post_add">
                                        <ion-icon aria-label="star-outline" class="md hydrated" name="trash-outline" role="img" style="font-size: 22px">
                                        </ion-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dv-btn-publish">
                        <button @click.prevent="add_img()" class="btn btn-icon btn-lg bg-primary-loole btn-primary me-1 mb-1" style="border-radius: 100px; width: 55px; height: 55px" type="button">
                            <ion-icon aria-label="add outline" class="md hydrated" name="add-outline" role="img">
                            </ion-icon>
                        </button>
                    </div>
                    <div class="invalid-input" style="text-align: center" v-if="noFiles == false">
                        Debes seleccionar al menos un archivo
                    </div>
                    <input @change="onFileChange" accept="image/video/*" hidden="true" id="file_post_looler_img" multiple="true" ref="loolerPost" type="file"/>
                    <div class="section full mt-2 mb-2">
                        <div class="wide-block pb-1 pt-2" style="border-bottom: none">
                            <form>
                                <div class="form-group boxed">
                                    <div class="input-wrapper" style="padding: 0 0px !important">
                                        <label class="form-label" for="address5" style="font-size: 15px">
                                            Añade una descripción
                                        </label>
                                        <textarea class="form-control" id="address5" maxlength="300" rows="4" style="font-size: 13px" v-model="inputs.description">
                                        </textarea>
                                        <div class="invalid-input" v-if="desc == false">
                                            Debes ingresar una descripcion
                                        </div>
                                    </div>
                                </div>
                                <ul class="listview simple-listview no-border-top-bottom">
                                    <li style="padding: 0 0px">
                                        <div style="font-weight: 500">
                                            Contenido premiun
                                        </div>
                                        <div class="form-check form-switch">
                                            <input @change="activateInput()" class="form-check-input" id="SwitchCheckDefault1" type="checkbox" v-model="inputs.premiun"/>
                                            <label class="form-check-label" for="SwitchCheckDefault1">
                                            </label>
                                        </div>
                                    </li>
                                    <li style="padding: 0 0px">
                                        <div style="font-weight: 500">
                                            Valor CLP
                                        </div>
                                        <div class="form-check form-switch">
                                            <money class="form-control" disabled="true" id="inputMoney" style="width: 100px" v-bind="money" v-model="inputs.price">
                                            </money>
                                        </div>
                                    </li>
                                    <div class="invalid-input" v-if="correctValue == false">
                                        El monto ingresado es incorrecto.
                                    </div>
                                </ul>
                                <p class="mt-3" style="font-size: 13px" v-if="premiun">
                                    * El monto mínimo es de $5.000 CLP y máximo $100.000 CLP
                                </p>
                            </form>
                            <div class="mt-5">
                                <button @click="publish()" class="btn btn-primary bg-primary-loole btn-block btn-lg rounded" type="submit">
                                    Publicar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- * app footer -->
            </div>
        </div>
    </div>
</template>
<script>
  import { Money } from "v-money";
  export default {
    components: { Money },
    props:['usuario'],
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
        premiun: false,
        max: 100000,
        min: 5000,
        correctValue: null,
        inputs: {
          description: "",
          premiun: "",
          price: 0,
        },
        files: [],
        desc: null,
        imagenes: [],
        first_image: [],
        prev: [],
        images: [],
        videos: [],
        noFiles: null,
        load: false
      };
    },

    mounted() {
       if(this.usuario.status_id != 3){
         this.$router.push('/Home')
       }
    },

    methods: {
      publish: function () {
        if (this.validateForm()) {

          this.load = true
          let formData = new FormData();
          for (var i = 0; i < this.files.length; i++) {
            let file = this.files[i];
            formData.append("files[" + i + "]", file);
            formData.append("files_post[" + i + "]", file);

          }

          if (this.premiun == true) {
            this.premiun = 1;
          } else {
            this.premiun = 0;
          }
          formData.append("block", this.premiun);
          formData.append("valor", this.inputs.price);
          formData.append("description", this.inputs.description);

          axios
            .post("/upload-post", formData, {
              headers: {
                "Content-Type": "Multipart/form-data",
              },
            })
            .then((response) => {
              if (response.data.code == 200) {

                this.$router.push('/SuccessPublish');


              } else {


                console.log(response.data);

              }
            });
        }
      },
      validateForm: function () {

        if (this.premiun) {
          if (this.inputs.description == "") {
            this.desc = false;
          }
          if (
            this.inputs.price == 0 ||
            this.inputs.price > this.max ||
            this.inputs.price < this.min
          ) {
            this.correctValue = false;
          }
          if (this.files.length == 0) {
            this.noFiles = false;
          }
          if (
            (this.inputs.description != "" &&
              this.inputs.price >= this.min &&
              this.files.length != 0) ||
            (this.inputs.description != "" &&
              this.inputs.price <= this.max &&
              this.files.length != 0)
          ) {
            return true;
          }
        } else {
          if (this.inputs.description == "") {
            this.desc = false;
          }
          if (this.files.length == 0) {
            this.noFiles = false;
          }
          if (this.inputs.description != "" && this.files.length != 0) {

            return true;
          }
        }
      },
      activateInput() {
        if (document.getElementById("inputMoney").disabled) {
          document.getElementById("inputMoney").disabled = false;
          this.premiun = true;
        } else {
          document.getElementById("inputMoney").disabled = true;
          this.price = 0;
          this.premiun = false;
          this.correctValue = null;
        }
      },
      checkPrice() {
        if (this.price < this.min) {

          this.correctValue = false;
        } else {
          if (this.price > this.max) {
            this.correctValue = false;
          } else {
            if (this.price >= this.min || this.price <= this.max) {
              this.correctValue = true;
            }
          }
        }
      },
      add_img: function () {
        let input_img = document.getElementById("file_post_looler_img");
        input_img.click();
      },
      onFileChange(e) {
        let vm = this;
        var selectedFiles = e.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          let file = selectedFiles[i];

          this.files.push(selectedFiles[i]);
        }
        this.noFiles = true;
      },
      read(file) {
        return URL.createObjectURL(file);
      },
      removefile: function (index) {
        this.files.splice(index, 1);
      },
    },
  };
</script>
<style>
</style>