import Vue from 'vue';
import VueRouter from 'vue-router';

import Notes from '../views/Notes.vue';
import Edit from '../views/Edit.vue';
import Pen from '../views/Pen.vue';
import Camera from '../views/Camera.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    props: true,
  },
  {
    path: '/pen/:id',
    name: 'Pen',
    component: Pen,
    props: true,
  },
  {
    path: '/camera/:id',
    name: 'Camera',
    component: Camera,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
