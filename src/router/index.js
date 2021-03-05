import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Login from "../views/Login";
import Contacts from "../views/Contacts";
import AddContact from "../views/AddContact";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: Contacts,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-contact",
    name: "AddContact",
    component: AddContact,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/contacts");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
