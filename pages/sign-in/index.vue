<template>
  <div id="sign-in" class="flex-column">
    <div class="text-center">
      <p class="text-h4 font-weight-bold light-blue--text text--darken-4">
        todo-app
      </p>
    </div>
    <div class="text-caption text-center grey--text mt-n2 mb-10">
      <p>usernameとpasswordを入力してください</p>
    </div>
    <v-form v-model="isValid">
      <div align="center">
        <div>
          <TextInput v-model="username" label="username" required />
        </div>
      </div>
      <div align="center">
        <div>
          <TextInput
            v-model="password"
            type="password"
            label="password"
            required
          />
        </div>
      </div>
    </v-form>
    <div align="center">
      <div>
        <AppButton :disabled="!isValid" color="blue darken-1" @click="signIn"
          >ログイン
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  useStore,
} from '@nuxtjs/composition-api';

const createDefaultSignInInput = () => ({
  username: '',
  password: '',
});

export default defineComponent({
  name: 'PagesSignIn',
  layout: 'no-header',
  setup() {
    const store = useStore();

    const isValid = ref(false);

    const signInInput = reactive(createDefaultSignInInput());

    const signIn = () => {
      try {
        store.dispatch('user/signIn', signInInput);
      } catch (e) {
        console.error(e);
      }
    };
    return {
      /** data */
      isValid,
      ...toRefs(signInInput),
      /** methods */
      signIn,
    };
  },
});
</script>
