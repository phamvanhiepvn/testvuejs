<template>
<div class="contact-add">
  <div class="animsition site-navbar-small contact-add-animsition mm-wrapper site-menubar-fold dashboard" data-auto-menubar="false">
    <Navbar/>
    <Sidebar/>
    <div class="body app-contacts page-aside-left">
      <div class="page bg-white">
		<div class="page-header pb-0">
			<h1 class="page-title">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" class="modal-icons float-left mr-10 mr-5"><g fill="none" fill-rule="evenodd"><circle cx="13.75" cy="17.75" r="3.75" fill="#DADFE3"></circle><g stroke-width="1.5" stroke-linecap="round"><path stroke="#6F7C87" d="M29.39 31.39H5.75a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2h23.64a2 2 0 0 1 2 2v23.64a2 2 0 0 1-2 2z"></path><path stroke="#000" d="M16.838 16.788a3.448 3.448 0 1 1-6.897 0 3.448 3.448 0 0 1 6.897 0zm-8.375 9.327a3.135 3.135 0 0 1 3.135-3.135h3.583a3.135 3.135 0 0 1 3.136 3.135m9.899-14.26a4.718 4.718 0 1 1-9.435 0 4.718 4.718 0 0 1 9.435 0zm-4.761-1.817v3.436m-1.718-1.718h3.436" stroke-linejoin="round"></path></g></g></svg>
				New contact</h1>
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="">Home</a></li>
				<li class="breadcrumb-item"><router-link to="/contacts"> Contacts</router-link></li>
				<li class="breadcrumb-item active">New Contact</li>
			</ol>

		</div>
		<!-- Contacts Content -->
		<div class="page-main page-content p-0">

			<div class="panel-body container-fluid">
				<div class="row row-lg">
					<div class="col-md-12 col-lg-6">
						<form @submit.prevent="submit">
							<div class="form-group form-group-sm row">
								<label class="col-md-3 col-form-label font-weight-400">Full Name: </label>
								<div class="col-md-9">
									<input type="text" class="form-control form-control-sm" name="name" placeholder="Enter the name of this person" autocomplete="off" v-model="form.name">
								</div>
							</div>
							<div class="form-group form-group-sm row">
								<label class="col-md-3 col-form-label font-weight-400">Title: </label>
								<div class="col-md-9">
									<input type="text" class="form-control form-control-sm" name="job_title" placeholder="Enter a title" autocomplete="off" v-model="form.job_title">
								</div>
							</div>

							<div class="form-group row">
								<label class="col-md-3 col-form-label font-weight-400">Company: </label>
								<div class="col-md-9">
									<input type="text" class="form-control form-control-sm" name="company" placeholder="Enter an company name" autocomplete="off" v-model="form.company">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-3 col-form-label font-weight-400">Avatar: </label>
								<div class="col-md-9">
									<input type="phone" class="form-control form-control-sm" name="avatar" placeholder="Enter a avatar" autocomplete="off" v-model="form.avatar">
								</div>
							</div>
							<div class="form-group  row">
								<label class="col-md-3 col-form-label font-weight-400">About: </label>
								<div class="col-md-9">
									<textarea class="form-control form-control-sm" name="about" placeholder="Enter the about of this person" v-model="form.about"></textarea>
								</div>
							</div>
							<div class="form-group form-material row">
								<label class="col-md-3 col-form-label font-weight-400"></label>
								<div class="col-md-9">
									<button type="submit" class="btn btn-primary waves-effect waves-classic">ADD CONTACT </button>
									<button type="reset" class="btn btn-default btn-outline waves-effect waves-classic">RESET</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
   <Footer/>
</div>
</div>
</template>

<script>
import {  mapGetters, mapActions } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
import $ from "jquery";

export default {
  name: "AddContact",
  components: { Footer, Navbar, Sidebar},
  data() {
    return {
      form: {
        name: "",
        job_title: "",
        company: "",
        avatar: "",
        about: "",
      },
    };
  },
  mounted: function () {
    $(".contact-add-animsition").css({ opacity: 1 })
    $("html").addClass("no-js").addClass("css-menubar");
  },
  created(){
      document.title = "Add Contact Page";
  },
  computed: {
    ...mapGetters({ contacts: "stateContacts" }),
  },
  methods: {
    ...mapActions(["createContact"]),
    async submit() {
      try {
        await this.createContact({form: this.form, contacts: this.contacts || []});
         this.$router.push("/contacts");
      } catch (error) {
        throw "Sorry you can't make a contact now!"
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
<style src="@/assets/global/vendor/waves/waves.css"></style>
<style src="@/assets/global/fonts/material-design/material-design.min.css"></style>
<style src="@/assets/global/fonts/brand-icons/brand-icons.min.css"></style>
<style src="@/assets/assets/skins/green.css"></style>
<style src="@/assets/css/custom.css"></style>
<style src="@/assets/assets/examples/css/apps/contacts.css"></style>
