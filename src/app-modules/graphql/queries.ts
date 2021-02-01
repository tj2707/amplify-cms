/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContentItem = /* GraphQL */ `
  query GetContentItem($id: ID!) {
    getContentItem(id: $id) {
      id
      path
      name
      parent
      properties {
        items {
          id
          type
          name
          value
          itemId
          createdAt
          updatedAt
        }
        nextToken
      }
      children
      createdAt
      updatedAt
    }
  }
`;
export const listContentItems = /* GraphQL */ `
  query ListContentItems(
    $filter: ModelContentItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        path
        name
        parent
        properties {
          nextToken
        }
        children
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContentItemProperty = /* GraphQL */ `
  query GetContentItemProperty($id: ID!) {
    getContentItemProperty(id: $id) {
      id
      type
      name
      value
      itemId
      item {
        id
        path
        name
        parent
        properties {
          nextToken
        }
        children
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContentItemPropertys = /* GraphQL */ `
  query ListContentItemPropertys(
    $filter: ModelContentItemPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentItemPropertys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        value
        itemId
        item {
          id
          path
          name
          parent
          children
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
