<template></template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Index',
  middleware({ redirect }) {
    redirect(200, '/task-management/tasks');
  },

  setup() {
    /**
     * init
     */
  },
});
</script>

<style scoped></style>
