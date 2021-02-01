/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContentItemInput = {
  id?: string | null,
  path: string,
  name?: string | null,
  parent: string,
  children?: Array< string | null > | null,
};

export type ModelContentItemConditionInput = {
  path?: ModelStringInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  children?: ModelStringInput | null,
  and?: Array< ModelContentItemConditionInput | null > | null,
  or?: Array< ModelContentItemConditionInput | null > | null,
  not?: ModelContentItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateContentItemInput = {
  id: string,
  path?: string | null,
  name?: string | null,
  parent?: string | null,
  children?: Array< string | null > | null,
};

export type DeleteContentItemInput = {
  id?: string | null,
};

export type CreateContentItemPropertyInput = {
  id?: string | null,
  type: string,
  name: string,
  value: string,
  itemId: string,
};

export type ModelContentItemPropertyConditionInput = {
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  itemId?: ModelIDInput | null,
  and?: Array< ModelContentItemPropertyConditionInput | null > | null,
  or?: Array< ModelContentItemPropertyConditionInput | null > | null,
  not?: ModelContentItemPropertyConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateContentItemPropertyInput = {
  id: string,
  type?: string | null,
  name?: string | null,
  value?: string | null,
  itemId?: string | null,
};

export type DeleteContentItemPropertyInput = {
  id?: string | null,
};

export type ModelContentItemFilterInput = {
  id?: ModelIDInput | null,
  path?: ModelStringInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  children?: ModelStringInput | null,
  and?: Array< ModelContentItemFilterInput | null > | null,
  or?: Array< ModelContentItemFilterInput | null > | null,
  not?: ModelContentItemFilterInput | null,
};

export type ModelContentItemPropertyFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  itemId?: ModelIDInput | null,
  and?: Array< ModelContentItemPropertyFilterInput | null > | null,
  or?: Array< ModelContentItemPropertyFilterInput | null > | null,
  not?: ModelContentItemPropertyFilterInput | null,
};

export type CreateContentItemMutationVariables = {
  input: CreateContentItemInput,
  condition?: ModelContentItemConditionInput | null,
};

export type CreateContentItemMutation = {
  createContentItem:  {
    __typename: "ContentItem",
    id: string,
    path: string,
    name: string | null,
    parent: string,
    properties:  {
      __typename: "ModelContentItemPropertyConnection",
      items:  Array< {
        __typename: "ContentItemProperty",
        id: string,
        type: string,
        name: string,
        value: string,
        itemId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    children: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentItemMutationVariables = {
  input: UpdateContentItemInput,
  condition?: ModelContentItemConditionInput | null,
};

export type UpdateContentItemMutation = {
  updateContentItem:  {
    __typename: "ContentItem",
    id: string,
    path: string,
    name: string | null,
    parent: string,
    properties:  {
      __typename: "ModelContentItemPropertyConnection",
      items:  Array< {
        __typename: "ContentItemProperty",
        id: string,
        type: string,
        name: string,
        value: string,
        itemId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    children: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentItemMutationVariables = {
  input: DeleteContentItemInput,
  condition?: ModelContentItemConditionInput | null,
};

export type DeleteContentItemMutation = {
  deleteContentItem:  {
    __typename: "ContentItem",
    id: string,
    path: string,
    name: string | null,
    parent: string,
    properties:  {
      __typename: "ModelContentItemPropertyConnection",
      items:  Array< {
        __typename: "ContentItemProperty",
        id: string,
        type: string,
        name: string,
        value: string,
        itemId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    children: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentItemPropertyMutationVariables = {
  input: CreateContentItemPropertyInput,
  condition?: ModelContentItemPropertyConditionInput | null,
};

export type CreateContentItemPropertyMutation = {
  createContentItemProperty:  {
    __typename: "ContentItemProperty",
    id: string,
    type: string,
    name: string,
    value: string,
    itemId: string,
    item:  {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentItemPropertyMutationVariables = {
  input: UpdateContentItemPropertyInput,
  condition?: ModelContentItemPropertyConditionInput | null,
};

export type UpdateContentItemPropertyMutation = {
  updateContentItemProperty:  {
    __typename: "ContentItemProperty",
    id: string,
    type: string,
    name: string,
    value: string,
    itemId: string,
    item:  {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentItemPropertyMutationVariables = {
  input: DeleteContentItemPropertyInput,
  condition?: ModelContentItemPropertyConditionInput | null,
};

export type DeleteContentItemPropertyMutation = {
  deleteContentItemProperty:  {
    __typename: "ContentItemProperty",
    id: string,
    type: string,
    name: string,
    value: string,
    itemId: string,
    item:  {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContentItemQueryVariables = {
  id: string,
};

export type GetContentItemQuery = {
  getContentItem:  {
    __typename: "ContentItem",
    id: string,
    path: string,
    name: string | null,
    parent: string,
    properties:  {
      __typename: "ModelContentItemPropertyConnection",
      items:  Array< {
        __typename: "ContentItemProperty",
        id: string,
        type: string,
        name: string,
        value: string,
        itemId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    children: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentItemsQueryVariables = {
  filter?: ModelContentItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentItemsQuery = {
  listContentItems:  {
    __typename: "ModelContentItemConnection",
    items:  Array< {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetContentItemPropertyQueryVariables = {
  id: string,
};

export type GetContentItemPropertyQuery = {
  getContentItemProperty:  {
    __typename: "ContentItemProperty",
    id: string,
    type: string,
    name: string,
    value: string,
    itemId: string,
    item:  {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentItemPropertysQueryVariables = {
  filter?: ModelContentItemPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentItemPropertysQuery = {
  listContentItemPropertys:  {
    __typename: "ModelContentItemPropertyConnection",
    items:  Array< {
      __typename: "ContentItemProperty",
      id: string,
      type: string,
      name: string,
      value: string,
      itemId: string,
      item:  {
        __typename: "ContentItem",
        id: string,
        path: string,
        name: string | null,
        parent: string,
        children: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateContentItemSubscription = {
  onCreateContentItem:  {
    __typename: "ContentItem",
    id: string,
    path: string,
    name: string | null,
    parent: string,
    properties:  {
      __typename: "ModelContentItemPropertyConnection",
      items:  Array< {
        __typename: "ContentItemProperty",
        id: string,
        type: string,
        name: string,
        value: string,
        itemId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    children: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentItemSubscription = {
  onUpdateContentItem:  {
    __typename: "ContentItem",
    id: string,
    path: string,
    name: string | null,
    parent: string,
    properties:  {
      __typename: "ModelContentItemPropertyConnection",
      items:  Array< {
        __typename: "ContentItemProperty",
        id: string,
        type: string,
        name: string,
        value: string,
        itemId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    children: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentItemSubscription = {
  onDeleteContentItem:  {
    __typename: "ContentItem",
    id: string,
    path: string,
    name: string | null,
    parent: string,
    properties:  {
      __typename: "ModelContentItemPropertyConnection",
      items:  Array< {
        __typename: "ContentItemProperty",
        id: string,
        type: string,
        name: string,
        value: string,
        itemId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    children: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentItemPropertySubscription = {
  onCreateContentItemProperty:  {
    __typename: "ContentItemProperty",
    id: string,
    type: string,
    name: string,
    value: string,
    itemId: string,
    item:  {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentItemPropertySubscription = {
  onUpdateContentItemProperty:  {
    __typename: "ContentItemProperty",
    id: string,
    type: string,
    name: string,
    value: string,
    itemId: string,
    item:  {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentItemPropertySubscription = {
  onDeleteContentItemProperty:  {
    __typename: "ContentItemProperty",
    id: string,
    type: string,
    name: string,
    value: string,
    itemId: string,
    item:  {
      __typename: "ContentItem",
      id: string,
      path: string,
      name: string | null,
      parent: string,
      properties:  {
        __typename: "ModelContentItemPropertyConnection",
        nextToken: string | null,
      } | null,
      children: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
