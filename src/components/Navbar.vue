<template>
    
<nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="">
    <div class="navbar-header">
		<button type="button" class="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
				data-toggle="menubar">
			<span class="sr-only">Toggle navigation</span>
			<span class="hamburger-bar"></span>
		</button>
		<button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-collapse"
				data-toggle="collapse">
			<i class="icon md-more" aria-hidden="true"></i>
		</button>
		<div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
			<img class="navbar-brand-logo" src="@/assets/images/logo1.png" title="Stringee">
			<span class="navbar-brand-text hidden-xs-down"> Stringee</span>
		</div>
		<button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-search" data-toggle="collapse">
			<span class="sr-only">Toggle Search</span>
			<i class="icon md-search" aria-hidden="true"></i>
		</button>
    </div>
    <div class="navbar-container container-fluid">
      <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
        <div class="nav-tickets">
          <ul class="nav nav-tabs navbar-toolbar" id="navTickets">
            <li class="nav-item nav-ticket-item">
              <a class="nav-link" data-toggle="tab" href="javascript:void(0)">
                <span class="thumb-ticket"><i class="md-layers" aria-hidden="true"></i></span>
                Day la ticket 1 qua dai thi hien thi the nao
                <span class="close-tab"><i class="md-close" aria-hidden="true"></i></span>
              </a>
            </li>
            <li class="nav-item nav-ticket-item">
              <a class="nav-link" data-toggle="tab" href="javascript:void(0)">
                <span class="thumb-ticket"><i class="md-layers" aria-hidden="true"></i></span>
                Day la ticket 2 
                <span class="close-tab"><i class="md-close" aria-hidden="true"></i></span>
              </a>
            </li>
            <li class="nav-item nav-ticket-item">
              <a class="nav-link" data-toggle="tab" href="javascript:void(0)">
                <span class="thumb-ticket"><i class="md-layers" aria-hidden="true"></i></span>
                Day la ticket 3 
                <span class="close-tab"><i class="md-close" aria-hidden="true"></i></span>
              </a>
            </li>
            <li class="nav-item nav-ticket-item">
              <a class="nav-link" data-toggle="tab" href="javascript:void(0)">
                <span class="thumb-ticket"><i class="md-layers" aria-hidden="true"></i></span>
                Day la ticket 4 
                <span class="close-tab"><i class="md-close" aria-hidden="true"></i></span>
              </a>
            </li>
            <li class="nav-item nav-add-ticket-item">
              <a class="nav-link" href="javascript:void(0)">
                <span class="icon-add-task"><i class="md-plus" aria-hidden="true"></i></span>
              </a>
            </li>
          </ul>
			</div>
      <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
				<li class="nav-item dropdown">
					<a class="nav-link" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up" aria-expanded="false" role="button">
						<span class="flag-icon flag-icon-us"></span>
					</a>
					<div class="dropdown-menu" role="menu">
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem">
							<span class="flag-icon flag-icon-gb"></span> English</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem">
							<span class="flag-icon flag-icon-fr"></span> French</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem">
							<span class="flag-icon flag-icon-cn"></span> Chinese</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem">
							<span class="flag-icon flag-icon-de"></span> German</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem">
							<span class="flag-icon flag-icon-nl"></span> Dutch</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false" data-animation="scale-up" role="button">
						<span class="avatar avatar-online">
							<img src="@/assets/global/portraits/5.jpg" alt="...">
							<i></i>
						</span>
					</a>
					<div class="dropdown-menu" role="menu">
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-account" aria-hidden="true"></i> Profile</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-card" aria-hidden="true"></i> Billing</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-settings" aria-hidden="true"></i> Settings</a>
						<div class="dropdown-divider"></div>
             <!-- <router-link to="/posts">Posts</router-link> -->
            <span v-if="isLoggedIn">
              <a @click="logout" class="dropdown-item"><i class="icon md-power" aria-hidden="true"></i> Logout</a>
            </span>
            <span v-else>
              <router-link to="/login"> <i class="icon md-power" aria-hidden="true"></i>Login</router-link>
            </span>
					</div>
				</li>
				<li class="nav-item" id="toggleChat">
					<a class="nav-link" data-toggle="site-sidebar" href="javascript:void(0)" title="Chat" data-url="site-sidebar.tpl">
						<i class="icon md-comment" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
      </div>
      <div class="collapse navbar-search-overlap" id="site-navbar-search">
			<form role="search">
				<div class="form-group">
					<div class="input-search">
						<i class="input-search-icon md-search" aria-hidden="true"></i>
						<input type="text" class="form-control" name="site-search" placeholder="Search...">
						<button type="button" class="input-search-close icon md-close" data-target="#site-navbar-search" data-toggle="collapse" aria-label="Close"></button>
					</div>
				</div>
			</form>
		</div>
    </div>
</nav>
</template>
<script>
import $ from "jquery";
export default {
  name: "Navbar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  mounted:function(){ 
	$(".nav-item").click(function(){
		$(this).children('.dropdown-menu').stop().slideToggle(400);
	})
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logOut");
      this.$router.push("/login");
    },
  },
};
</script>