export default [
    {
      path： '/join',
      name: 'join.index',
      component: resolve => require(['./../pages/join/index.vue'], resolve),
    },
    {
      path： '/room',
      name: 'room.index',
      component: resolve => require(['./../pages/room/index.vue'], resolve),
    },
    {
      path: '/',
      redirect: '/room',
    },
    {
      path: '/*',
      redirect: '/room',
    },
];
