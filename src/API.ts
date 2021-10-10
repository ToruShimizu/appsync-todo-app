/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  userId: string;
  name: string;
  description?: string | null;
};

export type Task = {
  __typename?: 'Task';
  userId: string;
  id: string;
  name: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateTaskInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTaskInput = {
  userId?: string | null;
  id?: string | null;
};

export type CreateUserInput = {
  username: string;
};

export type User = {
  __typename: 'User';
  id?: string;
  username?: string;
  tasks?: Array<Task | null>;
};

export type UpdateUserInput = {
  id: string;
  username: string;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateTaskMutationVariables = {
  input?: CreateTaskInput;
};

export type CreateTaskMutation = {
  createTask: {
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export type UpdateTaskMutationVariables = {
  input?: UpdateTaskInput;
};

export type UpdateTaskMutation = {
  updateTask: {
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export type DeleteTaskMutationVariables = {
  input?: DeleteTaskInput;
};

export type DeleteTaskMutation = {
  deleteTask: {
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput;
};

export type CreateUserMutation = {
  createUser: {
    __typename: 'User';
    id: string;
    username: string;
    tasks: Array<{
      __typename: 'Task';
      userId: string;
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
  };
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput;
};

export type UpdateUserMutation = {
  updateUser: {
    __typename: 'User';
    id: string;
    username: string;
    tasks: Array<{
      __typename: 'Task';
      userId: string;
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
  };
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput;
};

export type DeleteUserMutation = {
  deleteUser: {
    __typename: 'User';
    id: string;
    username: string;
    tasks: Array<{
      __typename: 'Task';
      userId: string;
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
  };
};

export type GetTasksQueryVariables = {
  userId?: string;
};

export type GetTasksQuery = {
  getTasks: Array<{
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetTaskQueryVariables = {
  id?: string;
};

export type GetTaskQuery = {
  getTask: {
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetUserQueryVariables = {
  id?: string;
};

export type GetUserQuery = {
  getUser: {
    __typename: 'User';
    id: string;
    username: string;
    tasks: Array<{
      __typename: 'Task';
      userId: string;
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
  };
};

export type OnCreateTaskSubscription = {
  onCreateTask?: {
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?: {
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?: {
    __typename: 'Task';
    userId: string;
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
