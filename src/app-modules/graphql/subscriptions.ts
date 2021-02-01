/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContentItem = /* GraphQL */ `
  subscription OnCreateContentItem {
    onCreateContentItem {
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
export const onUpdateContentItem = /* GraphQL */ `
  subscription OnUpdateContentItem {
    onUpdateContentItem {
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
export const onDeleteContentItem = /* GraphQL */ `
  subscription OnDeleteContentItem {
    onDeleteContentItem {
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
export const onCreateContentItemProperty = /* GraphQL */ `
  subscription OnCreateContentItemProperty {
    onCreateContentItemProperty {
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
export const onUpdateContentItemProperty = /* GraphQL */ `
  subscription OnUpdateContentItemProperty {
    onUpdateContentItemProperty {
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
export const onDeleteContentItemProperty = /* GraphQL */ `
  subscription OnDeleteContentItemProperty {
    onDeleteContentItemProperty {
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
