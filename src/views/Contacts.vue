<template>
<div class="contact-list">
  <div class="animsition site-navbar-small page-profile-v3 mm-wrapper site-menubar-fold dashboard" data-auto-menubar="false">
    <Navbar/>
    <Sidebar/>
    <div class="body app-contacts page-aside-left">
      <div class="body app-contacts page-aside-left">
    <div class="page bg-white">
    <div class="page-aside">
      <!-- Contacts Sidebar -->
      <div class="page-aside-switch">
        <i class="icon md-chevron-left" aria-hidden="true"></i>
        <i class="icon md-chevron-right" aria-hidden="true"></i>
      </div>
      <div class="page-aside-inner page-aside-scroll">
        <div data-role="container">
          <div data-role="content">
            <div class="page-aside-section">
              <div class="list-group">
                <a class="list-group-item justify-content-between" href="javascript:void(0)">
                  <span>
                    <i class="icon md-inbox" aria-hidden="true"></i> All contacts
                  </span>
                  <span class="item-right">61</span>
                </a>
              </div>
            </div>
            <div class="page-aside-section">
              <h5 class="page-aside-title">LABEL</h5>
              <div class="list-group has-actions">
                <div class="list-group-item" data-plugin="editlist">
                  <div class="list-content">
                    <span class="item-right">10</span>
                    <span class="list-text">Work</span>
                    <div class="item-actions">
                      <span class="btn btn-pure btn-icon" data-toggle="list-editable"><i class="icon md-edit" aria-hidden="true"></i></span>
                      <span class="btn btn-pure btn-icon" data-toggle="list-delete"><i class="icon md-delete" aria-hidden="true"></i></span>
                    </div>
                  </div>
                  <div class="list-editable">
                    <div class="form-group form-material">
                      <input type="text" class="form-control empty" name="label" value="Work">
                      <button type="button" class="input-editable-close icon md-close" data-toggle="list-editable-close"
                      aria-label="Close" aria-expanded="true"></button>
                    </div>
                  </div>
                </div>
                <div class="list-group-item" data-plugin="editlist">
                  <div class="list-content">
                    <span class="item-right">5</span>
                    <span class="list-text">Family</span>
                    <div class="item-actions">
                      <span class="btn btn-pure btn-icon" data-toggle="list-editable"><i class="icon md-edit" aria-hidden="true"></i></span>
                      <span class="btn btn-pure btn-icon" data-toggle="list-delete"><i class="icon md-delete" aria-hidden="true"></i></span>
                    </div>
                  </div>
                  <div class="list-editable">
                    <div class="form-group form-material">
                      <input type="text" class="form-control empty" name="label" value="Family">
                      <button type="button" class="input-editable-close icon md-close" data-toggle="list-editable-close"
                      aria-label="Close" aria-expanded="true"></button>
                    </div>
                  </div>
                </div>
                <div class="list-group-item" data-plugin="editlist">
                  <div class="list-content">
                    <span class="item-right">16</span>
                    <span class="list-text">Private</span>
                    <div class="item-actions">
                      <span class="btn btn-pure btn-icon" data-toggle="list-editable"><i class="icon md-edit" aria-hidden="true"></i></span>
                      <span class="btn btn-pure btn-icon" data-toggle="list-delete"><i class="icon md-delete" aria-hidden="true"></i></span>
                    </div>
                  </div>
                  <div class="list-editable">
                    <div class="form-group form-material">
                      <input type="text" class="form-control empty" name="label" value="Private">
                      <button type="button" class="input-editable-close icon md-close" data-toggle="list-editable-close"
                      aria-label="Close" aria-expanded="true"></button>
                    </div>
                  </div>
                </div>
                <div class="list-group-item" data-plugin="editlist">
                  <div class="list-content">
                    <span class="item-right">30</span>
                    <span class="list-text">Friends</span>
                    <div class="item-actions">
                      <span class="btn btn-pure btn-icon" data-toggle="list-editable"><i class="icon md-edit" aria-hidden="true"></i></span>
                      <span class="btn btn-pure btn-icon" data-toggle="list-delete"><i class="icon md-delete" aria-hidden="true"></i></span>
                    </div>
                  </div>
                  <div class="list-editable">
                    <div class="form-group form-material">
                      <input type="text" class="form-control empty" name="label" value="Friends">
                      <button type="button" class="input-editable-close icon md-close" data-toggle="list-editable-close"
                      aria-label="Close" aria-expanded="true"></button>
                    </div>
                  </div>
                </div>
                <a id="addLabelToggle" class="list-group-item" href="javascript:void(0)" data-toggle="modal"
                data-target="#addLabelForm">
                  <i class="icon md-plus" aria-hidden="true"></i> Add New Label
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contacts Content -->
    <div class="page-main">
      <!-- Contacts Content Header -->
      <div class="page-header">
        <h1 class="page-title">Contact List</h1>
        <div class="page-header-actions">
          <form>
            <div class="input-search input-search-dark">
              <i class="input-search-icon md-search" aria-hidden="true"></i>
              <input type="text" class="form-control" name="" placeholder="Search...">
            </div>
          </form>
        </div>
      </div>
      <!-- Contacts Content -->
      <div id="contactsContent" class="page-content page-content-table" data-plugin="selectable">
        <!-- Actions -->
        <div class="page-content-actions">
          <div class="float-right">
            <div class="dropdown">
              <button type="button" class="btn btn-pure" data-toggle="dropdown" aria-expanded="false">
                More
                <span class="icon md-chevron-down" aria-hidden="true"></span>
              </button>
              <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" href="javascript:void(0)">More</a>
                <a class="dropdown-item" href="javascript:void(0)">More</a>
              </div>
            </div>
             <router-link class="btn btn-info btn-md empty-btn" to="/add-contact"> Add Contact</router-link>
          </div>
          <div class="btn-group btn-group-flat">
            <div class="dropdown">
              <button class="btn btn-icon btn-pure btn-default" data-toggle="dropdown" aria-expanded="false"
              type="button"><i class="icon md-folder" aria-hidden="true"></i></button>
              <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" href="javascript:void(0)">work</a>
                <a class="dropdown-item" href="javascript:void(0)">Family</a>
                <a class="dropdown-item" href="javascript:void(0)">Private</a>
                <a class="dropdown-item" href="javascript:void(0)">Friends</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0)">Trash</a>
                <a class="dropdown-item" href="javascript:void(0)">Spam</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="btn btn-icon btn-pure btn-default" data-toggle="dropdown" aria-expanded="false"
              type="button"><i class="icon md-tag" aria-hidden="true"></i></button>
              <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" href="javascript:void(0)">work</a>
                <a class="dropdown-item" href="javascript:void(0)">Family</a>
                <a class="dropdown-item" href="javascript:void(0)">Private</a>
                <a class="dropdown-item" href="javascript:void(0)">Friends</a>
              </div>
            </div>
          </div>
        </div>
        
<table class="table is-indent" data-plugin="animateList" data-animate="fade" data-child="tr"
        data-selectable="selectable">
          <thead>
            <tr>
              <th class="pre-cell"></th>
              <th class="cell-30" scope="col">
                <span class="checkbox-custom checkbox-primary checkbox-lg contacts-select-all">
                  <input type="checkbox" class="contacts-checkbox selectable-all" id="select_all"
                  />
                  <label for="select_all"></label>
                </span>
              </th>
              <th class="cell-300 text-center" scope="col">Name</th>
              <th class="cell-300 text-center" scope="col">Title</th>
              <th scope="col" class="cell-300 text-center">Email</th>
              <th class="suf-cell"></th>
            </tr>
          </thead>
          <tbody v-if="contacts">
            <tr data-url="panel.tpl" data-toggle="slidePanel" v-for="contact in contacts" :key="contact.id">
              <td class="pre-cell"></td>
              <td class="cell-30">
                <span class="checkbox-custom checkbox-primary checkbox-lg">
                  <input type="checkbox" class="contacts-checkbox selectable-item" id="contacts_1"
                  />
                  <label for="contacts_1"></label>
                </span>
              </td>
              <td class="cell-300">
                <a class="avatar" href="javascript:void(0)">
                  <img class="img-fluid" src="@/assets/global/portraits/1.jpg" alt="...">
                </a>
                {{contact.name}}
              </td>
              <td class="cell-300">{{contact.job_title}}</td>
              <td>{{contact.job_title}}@gmail.com</td>
              <td class="suf-cell"></td>
            </tr>
            
          </tbody>
          <div v-else>Oh no!!! We have no contact</div>
        </table>
        <ul data-plugin="paginator" data-total="50" data-skin="pagination-gap"></ul>
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
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
import $ from "jquery";

export default {
  name: "Contacts",
  components: { Footer, Navbar, Sidebar},
  created: function() {
    // a function to call getposts action
    document.title = "Contacts List Page";
    //this.getContacts()
    
  },
  mounted: function () {
    $(".page-profile-v3").css({ opacity: 1 })
    $("html").addClass("no-js").addClass("css-menubar");
  },
  computed: {
    ...mapGetters({ contacts: "stateContacts" }),
  },
  methods: {
    ...mapActions(["getContacts"]),
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