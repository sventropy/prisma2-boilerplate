import React, { useState } from "react";
import "./App.css";
import { Query } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./GraphQlClient";
import { Table, Container, Jumbotron, Button } from "react-bootstrap";
import gql from "graphql-tag";
import { HeaderItemQuery } from "./graphql/HeaderItemQuery";
import { AddHeaderWithItem } from "./graphql/AddHeaderWithItem";

const HEADER_ITEM_QUERY = gql`
  query HeaderItemQuery {
    headers {
      title
      items {
        title
        type
        createdAt
        # description
      }
    }
  }
`;

const ADD_MUTATION = gql`
  mutation AddHeaderWithItem {
    addHeaderWithItem {
      title
      items {
        title
        type
        createdAt
        # description
      }
    }
  }
`;

function HeaderItemList() {
  const [refresh, setRefresh] = useState(false);

  const [addHeaderWithItem, { client }] = useMutation<AddHeaderWithItem>(
    ADD_MUTATION,
  );

  const createTables = (data: HeaderItemQuery) => (
    <Table>
      <thead>
        <tr>
          <td>Header</td>
          <td>Item</td>
          <td>Type</td>
          <td>Created At</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {data.headers.map(h =>
          h.items.map(i => (
            <tr key={h.title + "-" + i.title}>
              <td>{h.title}</td>
              <td>{i.title}</td>
              <td>{i.type}</td>
              <td>{i.createdAt}</td>
              <td>{i.description}</td>
            </tr>
          )),
        )}
      </tbody>
    </Table>
  );

  return (
    <>
      <Jumbotron>
        <h1>React GraphQL Client</h1>
      </Jumbotron>
      <Query query={HEADER_ITEM_QUERY}>
        {({ loading, data }: { loading: boolean; data: HeaderItemQuery }) => {
          return loading ? <>Loading...</> : createTables(data);
        }}
      </Query>
      <Button
        onClick={async (_event: any) => {
          const { data } = await addHeaderWithItem();
          // Update cache
          const cachedData = client!.readQuery<HeaderItemQuery>({
            query: HEADER_ITEM_QUERY,
          });
          cachedData!.headers.push(data!.addHeaderWithItem);
          client!.writeQuery<HeaderItemQuery>({
            query: HEADER_ITEM_QUERY,
            data: cachedData!,
          });
          setRefresh(!refresh);
        }}
      >
        + Add
      </Button>
    </>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <HeaderItemList></HeaderItemList>
      </Container>
    </ApolloProvider>
  );
}

export default App;
