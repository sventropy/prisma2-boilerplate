/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemType } from "./../../graphql/globalTypes";

// ====================================================
// GraphQL query operation: HeaderItemQuery
// ====================================================

export interface HeaderItemQuery_headers_items {
  __typename: "Item";
  title: string | null;
  type: ItemType;
  createdAt: any;
}

export interface HeaderItemQuery_headers {
  __typename: "Header";
  title: string;
  items: HeaderItemQuery_headers_items[];
}

export interface HeaderItemQuery {
  headers: HeaderItemQuery_headers[];
}
