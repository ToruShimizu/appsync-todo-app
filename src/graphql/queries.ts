/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTasks = /* GraphQL */ `
  query GetTasks($userId: ID!) {
    getTasks(userId: $userId) {
      userId
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      userId
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      tasks {
        userId
        id
        name
        description
        createdAt
        updatedAt
      }
    }
  }
`;
