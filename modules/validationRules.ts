import { useContext } from '@nuxtjs/composition-api';

export const useValidationRules = () => {
  const { i18n } = useContext();

  /**
   * 与えられた文字列が, 引数で指定した範囲以内かどうかを返す
   * @param label フォームのラベル. i18nメッセージに埋め込まれる
   * @param min 最低文字数
   * @param max 最大文字数
   * @param optional デフォルトは `false` . `false` の場合, `v` が空の場合に条件を評価せず `true` を返す. 必須項目の場合trueにする.
   */

  const validateRange =
    (label: string, min: number, max: number, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.length.range', 1, {
        label,
        min,
        max,
      });
      const condition = (v.length >= min && v.length <= max) || message;
      return optional ? !v || condition : condition;
    };
  const validateRequired =
    (label: string) =>
    <T>(v: T) =>
      !!v || i18n.tc('validationMessages.required', 1, { label });

  const validateMaxLength =
    (label: string, length: number, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.length.within', 1, {
        label,
        length,
      });
      const condition = v.length <= length || message;
      return optional ? !v || condition : condition;
    };

  const validateOnlyAlphanumeric =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.only.alphanumeric', 1, {
        label,
      });
      const condition = !!/^[a-zA-Z0-9]+$/.test(v) || message;
      return optional ? !v || condition : condition;
    };
  const validateAtLeastOneNumber =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.atLeastOne.number', 1, {
        label,
      });
      const condition = /[0-9]/.test(v) || message;
      return optional ? !v || condition : condition;
    };
  const validateAtLeastOneAlphabet =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.atLeastOne.alphabet', 1, {
        label,
      });
      const condition = /[a-zA-Z]/.test(v) || message;
      return optional ? !v || condition : condition;
    };
  const validateAtLeastOneLowerCase =
    (label: string, optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.atLeastOne.lowerCase', 1, {
        label,
      });
      const condition = /[a-z]/.test(v) || message;
      return optional ? !v || condition : condition;
    };
  const validateAtLeastOneLength =
    (label: string, optional: boolean = false) =>
    (v: any[]) => {
      const message = i18n.tc('validationMessages.atLeastOne.lowerCase', 1, {
        label,
      });
      const condition = !!v.length || message;
      return optional ? !v || condition : condition;
    };
  const validateEmail =
    (optional: boolean = false) =>
    (v: string) => {
      const message = i18n.tc('validationMessages.email');
      const condition =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          v
        ) || message;
      return optional ? !v || condition : condition;
    };

  return {
    validateAtLeastOneAlphabet,
    validateAtLeastOneLowerCase,
    validateAtLeastOneLength,
    validateAtLeastOneNumber,
    validateEmail,
    validateMaxLength,
    validateOnlyAlphanumeric,
    validateRange,
    validateRequired,
  };
};
