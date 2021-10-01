export const validationMessages = {
  length: {
    range: '{label}は{min}以上{max}文字以内で入力してください。',
    within: '{label}は{length}文字以内で入力してください。',
  },
  required: '{label}は必須です。',
  atLeastOne: {
    number: '{label}は最低1文字以上数字を含めてください。',
    alphabet: '{label}は最低1文字以上英語を含めてください。',
    lowerCase: '{label}は最低1文字以上小文字を含めてください。',
  },
  email: 'メールアドレスを正しく入力してください。',
};
