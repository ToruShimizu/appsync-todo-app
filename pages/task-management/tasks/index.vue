<template>
  <div id="pages-task-management-tasks">
    <div class="text-right">
      <AppButton>タスクを作成する</AppButton>
    </div>
    <div class="d-flex">
      <TextInput v-model="searchedWord" label="検索" />
    </div>
    <DataTable :items="DUMMY_TASKS" :headers="HEADERS" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { Todo } from '~/src/API';

const HEADERS = [
  { text: 'id', value: 'id' },
  { text: 'タスク', value: 'name' },
  { text: '詳細', value: 'description' },
] as const;

const DUMMY_TASKS = [
  {
    typename: 'Todo',
    id: 1,
    name: 'タスク1',
    description: '詳細1',
  },
  {
    typename: 'Todo',
    id: 2,
    name: 'タスク2',
    description: '詳細2',
  },
];

export default defineComponent({
  setup() {
    const tasks = ref<Todo[]>([]);
    const searchedWord = ref('');

    return {
      /** data */
      DUMMY_TASKS,
      HEADERS,
      searchedWord,
      tasks,
      /** methods */
    };
  },
});
</script>
