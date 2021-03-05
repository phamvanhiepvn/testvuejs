<template>
<div class="login">
<div class="animsition page-login-v3 layout-full">
  <div class="page vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">>
    <div class="page-content vertical-align-middle">
      <div class="panel">
        <div class="panel-body">
          <div class="brand">
            <img class="brand-img" src="@/assets/assets/images/logo-blue.png" alt="...">
            <h2 class="brand-text font-size-18">Remark</h2>
          </div>
           <form @submit.prevent="submit">
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input type="email" class="form-control" name="email" v-model="form.email" />
              <label class="floating-label">Email</label>
            </div>
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input type="password" class="form-control" name="password" v-model="form.password" />
              <label class="floating-label">Password</label>
            </div>
            <div class="form-group clearfix">
              <div class="checkbox-custom checkbox-inline checkbox-primary checkbox-lg float-left">
                <input type="checkbox" id="inputCheckbox" name="remember">
                <label for="inputCheckbox">Remember me</label>
              </div>
              <a class="float-right" href="javascript:void(0)">Forgot password?</a>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-lg mt-40 waves-effect waves-classic">Sign in</button>
          </form>
          <p v-if="showError" id="error">Email or Password is incorrect</p>
          <p>Still no account? Please go to <a href="javascript:void(0)">Sign up</a></p>
        </div>
      </div>
      <LoginFooter/>
    </div>
  </div>
    <div>  
    </div>
  </div>
</div>
  
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
import LoginFooter from "@/components/LoginFooter.vue";

export default {
  name: "Login",
  components: {LoginFooter},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  async created() {
    document.title = "Login Page";
  },
  mounted: async function () {
    $(".page-login-v3").css({
      opacity: 1
    })
  },
  methods: {
    ...mapActions(["logIn"]),
    async submit() {
      const User = new FormData();
      const {email, password} = this.form;
      User.append("email", email);
      User.append("password", password);
      try {
        await this.logIn(User);
        this.$router.push("/contacts");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>
<style src="@/assets/global/css/bootstrap.min.css"></style>
<style src="@/assets/global/css/bootstrap-extend.min.css"></style>
<style src="@/assets/assets/css/site.min.css"></style>
<style src="@/assets/global/vendor/animsition/animsition.css"></style>
<style src="@/assets/global/vendor/asscrollable/asScrollable.css"></style>
<style src="@/assets/global/vendor/switchery/switchery.css"></style>
<style src="@/assets/global/vendor/intro-js/introjs.css"></style>
<style src="@/assets/global/vendor/slidepanel/slidePanel.css"></style>
<style src="@/assets/global/vendor/jquery-mmenu/jquery-mmenu.css"></style>
<style src="@/assets/assets/examples/css/pages/login-v3.css"></style>
<style src="@/assets/global/vendor/waves/waves.css"></style>
<style src="@/assets/global/fonts/material-design/material-design.min.css"></style>
<style src="@/assets/global/fonts/brand-icons/brand-icons.min.css"></style>
<style scoped>
  .btn-block{
    box-sizing: border-box!important;;
  }
</style>
