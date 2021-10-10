<template>
  <div id="pages-task-management-tasks">
    <div class="text-right py-4">
      <AppButton>タスクを作成する</AppButton>
    </div>
    <div class="d-flex pb-4">
      <v-col cols="4">
        <TextInput v-model="searchedWord" label="検索" />
      </v-col>
    </div>
    <DataTable :items="DUMMY_TASKS" :headers="HEADERS">
      <template v-slot:[`item.edit`]="{ item }">
        <div class="text-right mr-3">
          <v-btn icon @click="editItem(item)">
            <v-icon color="info"> mdi-pencil-outline </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="info"> mdi-delete-outline </v-icon>
          </v-btn>
        </div>
      </template>
    </DataTable>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';
import { Todo } from '~/src/API';

const HEADERS = [
  { text: 'id', value: 'id' },
  { text: 'タスク', value: 'name' },
  { text: '詳細', value: 'description' },
  { text: '編集 / 削除', value: 'edit', align: 'right' },
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

const createDefaultTask = () => ({
  id: 0,
  name: '',
  description: '',
});

export default defineComponent({
  setup() {
    const tasks = ref<Todo[]>([]);
    const selectedTask = reactive<Todo>(createDefaultTask());
    const searchedWord = ref('');

    const editItem = (task: Todo) => Object.assign(selectedTask, task);

    return {
      /** data */
      DUMMY_TASKS,
      HEADERS,
      searchedWord,
      tasks,
      /** methods */
      editItem,
    };
  },
});
</script>
