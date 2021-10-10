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
    <DataTable :items="tasks" :headers="HEADERS">
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
import { useFetch } from '@nuxtjs/composition-api';
import { defineComponent, reactive, ref } from '@vue/composition-api';
import { Task } from '~/src/API';

const HEADERS = [
  { text: 'id', value: 'id' },
  { text: 'タスク', value: 'name' },
  { text: '詳細', value: 'description' },
  { text: '編集 / 削除', value: 'edit', align: 'right' },
] as const;

const DUMMY_TASKS = [
  {
    id: '1',
    name: 'タスク1',
    description: '詳細1',
  },
  {
    id: '2',
    name: 'タスク2',
    description: '詳細2',
  },
] as Task[];

const createDefaultTask = () => ({
  userId: '',
  id: '',
  name: '',
  description: '',
});

export default defineComponent({
  setup() {
    const tasks = ref<Task[]>([]);
    const selectedTask = reactive<Task>(createDefaultTask());
    const searchedWord = ref('');

    const editItem = (task: Task) => Object.assign(selectedTask, task);

    /**
     * init
     */
    useFetch(async () => {
      tasks.value = await Promise.resolve(DUMMY_TASKS);
    });

    return {
      /** data */
      HEADERS,
      searchedWord,
      tasks,
      /** methods */
      editItem,
    };
  },
});
</script>
