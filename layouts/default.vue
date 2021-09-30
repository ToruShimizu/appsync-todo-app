<template>
  <div id="layouts-default">
    <v-app>
      <v-app-bar app color="light-blue darken-4">
        <v-toolbar-title class="text-h5 white--text">
          todo-app
        </v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutsDefault',
  setup() {},
});
</script>

<style scoped></style>
