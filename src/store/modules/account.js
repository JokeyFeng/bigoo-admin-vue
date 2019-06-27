import localDB from '../../utils/localStorage'

export default {
  namespaced: true,
  state: {
    token: localDB.get('user_token'),
    expireTime: localDB.get('expire_time'),
    user: localDB.get('user'),
    permissions: localDB.get('permissions'),
    roles: localDB.get('roles')
  },
  mutations: {
    setToken(state, value) {
      localDB.save('user_token', value);
      state.token = value;
    },
    setExpireTime(state, value) {
      localDB.save('expire_time', value);
      state.expireTime = value;
    },
    setUser(state, value) {
      localDB.save('user', value);
      state.user = value;
    },
    setPermissions(state, value) {
      localDB.save('permissions', value);
      state.permissions = value;
    },
    setRoles(state, value) {
      localDB.save('roles', value);
      state.roles = value;
    }
  }
}
