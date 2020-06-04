/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemType } from "./../../graphql/globalTypes";

// ====================================================
// GraphQL mutation operation: AddHeaderWithItem
// ====================================================

export interface AddHeaderWithItem_addHeaderWithItem_items {
  __typename: "Item";
  title: string | null;
  type: ItemType;
  createdAt: any;
  description: string | null;
}

export interface AddHeaderWithItem_addHeaderWithItem {
  __typename: "Header";
  title: string;
  items: AddHeaderWithItem_addHeaderWithItem_items[];
}

export interface AddHeaderWithItem {
  addHeaderWithItem: AddHeaderWithItem_addHeaderWithItem;
}
