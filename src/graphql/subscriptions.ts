/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      user {
        id
        username
        name
        furigana
      }
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      user {
        id
        username
        name
        furigana
      }
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      user {
        id
        username
        name
        furigana
      }
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $id: ID
    $username: String
    $name: String
    $furigana: String
  ) {
    onCreateUser(
      id: $id
      username: $username
      name: $name
      furigana: $furigana
    ) {
      id
      username
      name
      furigana
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $id: ID
    $username: String
    $name: String
    $furigana: String
  ) {
    onUpdateUser(
      id: $id
      username: $username
      name: $name
      furigana: $furigana
    ) {
      id
      username
      name
      furigana
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $id: ID
    $username: String
    $name: String
    $furigana: String
  ) {
    onDeleteUser(
      id: $id
      username: $username
      name: $name
      furigana: $furigana
    ) {
      id
      username
      name
      furigana
    }
  }
`;
