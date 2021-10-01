import { useValidationRules } from '~/modules/validationRules';

export const useSignInRules = () => {
  const {
    validateAtLeastOneAlphabet,
    validateAtLeastOneNumber,
    validateAtLeastOneLowerCase,
    validateOnlyAlphanumeric,
    validateRange,
    validateRequired,
  } = useValidationRules();

  const signInValidationRules = {
    password: [
      validateAtLeastOneAlphabet('パスワード'),
      validateAtLeastOneNumber('パスワード'),
      validateAtLeastOneLowerCase('パスワード'),
      validateOnlyAlphanumeric('パスワード'),
      validateRange('パスワード', 8, 255),
      validateRequired('パスワード'),
    ],
    username: [validateRequired('ユーザーネーム')],
  };
  return { signInValidationRules };
};
