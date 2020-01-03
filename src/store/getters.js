const getters = {
  roles: state => state.user.roles,
  accessRoutes: state => state.permission.routes
};
export default getters;
