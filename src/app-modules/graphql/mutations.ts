/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContentItem = /* GraphQL */ `
  mutation CreateContentItem(
    $input: CreateContentItemInput!
    $condition: ModelContentItemConditionInput
  ) {
    createContentItem(input: $input, condition: $condition) {
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
export const updateContentItem = /* GraphQL */ `
  mutation UpdateContentItem(
    $input: UpdateContentItemInput!
    $condition: ModelContentItemConditionInput
  ) {
    updateContentItem(input: $input, condition: $condition) {
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
export const deleteContentItem = /* GraphQL */ `
  mutation DeleteContentItem(
    $input: DeleteContentItemInput!
    $condition: ModelContentItemConditionInput
  ) {
    deleteContentItem(input: $input, condition: $condition) {
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
export const createContentItemProperty = /* GraphQL */ `
  mutation CreateContentItemProperty(
    $input: CreateContentItemPropertyInput!
    $condition: ModelContentItemPropertyConditionInput
  ) {
    createContentItemProperty(input: $input, condition: $condition) {
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
export const updateContentItemProperty = /* GraphQL */ `
  mutation UpdateContentItemProperty(
    $input: UpdateContentItemPropertyInput!
    $condition: ModelContentItemPropertyConditionInput
  ) {
    updateContentItemProperty(input: $input, condition: $condition) {
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
export const deleteContentItemProperty = /* GraphQL */ `
  mutation DeleteContentItemProperty(
    $input: DeleteContentItemPropertyInput!
    $condition: ModelContentItemPropertyConditionInput
  ) {
    deleteContentItemProperty(input: $input, condition: $condition) {
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
