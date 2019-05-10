<template>
  <div class="ui secondary pointing menu">
    <a class="item active" href="/">Image Storage</a>
    <div class="right menu">
      <a class="ui item" @click="login" target="_blank">Login</a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
