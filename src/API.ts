/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  userId: string,
  id?: string | null,
  name: string,
  description?: string | null,
};

export type Todo = {
  __typename: "Todo",
  user?: User,
  id?: string,
  name?: string,
  description?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type User = {
  __typename: "User",
  id?: string,
  username?: string,
  name?: string,
  furigana?: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateUserInput = {
  username: string,
  name: string,
  furigana: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  furigana?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTodoMutationVariables = {
  input?: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      furigana: string,
    },
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input?: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      furigana: string,
    },
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input?: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      furigana: string,
    },
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    furigana: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    furigana: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    furigana: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id?: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      furigana: string,
    },
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    furigana: string,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      furigana: string,
    },
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      furigana: string,
    },
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      furigana: string,
    },
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null,
  username?: string | null,
  name?: string | null,
  furigana?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    furigana: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
  username?: string | null,
  name?: string | null,
  furigana?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    furigana: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
  username?: string | null,
  name?: string | null,
  furigana?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    furigana: string,
  } | null,
};
