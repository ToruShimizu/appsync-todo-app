import { reactive } from '@nuxtjs/composition-api';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_COUNT = 1;
const DEFAULT_ITEMS_PER_PAGE = 100;

/**
 * VDataTableと合わせて使用できるページネーション用の変数を返す.
 * @param option `option.page` = 現在のページ, `option.pageCount` = ページ数, `option.itemsPerPage` = 1ページごとのアイテム数
 * @examples
 * ```typescript
 * const { pagination } = usePagination()
 * // => pagination.page === 1, pagination.pageCount === 1, pagination.itemsPerPage === 100
 *
 * const { pagination } = usePagination({ itemsPerPage: 50 })
 * // => pagination.page === 1, pagination.pageCount === 1, pagination.itemsPerPage === 50
 * ```
 */
export const usePagination = (option?: {
  page?: number;
  pageCount?: number;
  itemsPerPage?: number;
}) => {
  return {
    pagination: reactive({
      page: option?.page || DEFAULT_PAGE,
      pageCount: option?.pageCount || DEFAULT_PAGE_COUNT,
      itemsPerPage: option?.itemsPerPage || DEFAULT_ITEMS_PER_PAGE,
    }),
  };
};
