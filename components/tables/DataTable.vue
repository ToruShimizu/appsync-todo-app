<template>
  <v-card class="data-table" flat>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
      :item-key="itemKey"
      :loading="loading"
      :page.sync="page"
      :footer-props="{
        'disable-items-per-page': true,
      }"
      :loading-text="loadingText"
      :no-data-text="noDataText"
      @page-count="$emit('update:pageCount', $event)"
    >
      <template v-if="items.length" v-slot:body="{ items }">
        <tbody>
          <tr
            v-for="item in items"
            :key="item[itemKey]"
            @click="$emit('click:row', item)"
          >
            <td v-for="header in headers" :key="header.value">
              <!-- MEMO: header.valueがネストしている場合、ページ側で表示 -->
              <slot :name="`item.${header.value}`" :item="item">
                {{ item[header.value] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-card>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api';
import { usePagination } from '~/modules/utils/pagination';
interface Header {
  text: string;
  value: string[];
}
export default defineComponent({
  name: 'DataTable',
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    headers: {
      type: Array as PropType<Header[]>,
      required: true,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
    itemKey: {
      type: String,
      default: 'id',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: 'データを取得中',
    },
    noDataText: {
      type: String,
      default: 'データがありません',
    },
  },

  setup() {
    // ページネーション
    const { pagination } = usePagination();
    return {
      /** data */
      ...toRefs(pagination),
    };
  },
});
</script>
<style scoped>
.data-table {
  border: 1px solid #bdbdbd;
  border-radius: 10px;
}
/* ページネーションのスタイル */
.v-data-table >>> .v-data-footer {
  padding: 8px;
}
.v-data-table >>> .v-data-footer .v-btn {
  color: #03a9f4;
}
.v-data-table >>> .v-data-footer__select,
.v-data-table >>> .v-data-footer__pagination {
  display: none;
}
.v-data-table >>> .v-data-footer {
  justify-content: flex-end;
}
.furigana {
  font-size: 10px;
}
.v-data-table >>> .v-data-table__wrapper tbody tr th {
  cursor: pointer;
  /* thの改行を修正 */
  white-space: nowrap;
}
</style>
