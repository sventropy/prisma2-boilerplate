import React from "react";
import "./App.css";
import { Query } from "react-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./GraphQlClient";
import { Table, Container, Jumbotron } from "react-bootstrap";
import gql from "graphql-tag";
import { HeaderItemQuery } from "./graphql/HeaderItemQuery";

const HEADER_ITEM_QUERY = gql`
  query HeaderItemQuery {
    headers {
      title
      items {
        title
        type
        createdAt
      }
    }
  }
`;

function App() {
  const createTables = (data: HeaderItemQuery) => (
    <Table>
      <thead>
        <tr>
          <td>Header</td>
          <td>Item</td>
          <td>Type</td>
          <td>Created At</td>
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
            </tr>
          )),
        )}
      </tbody>
    </Table>
  );
  return (
    <ApolloProvider client={client}>
      <Container>
        <Jumbotron>
          <h1>React GraphQL Client</h1>
        </Jumbotron>
        <Query query={HEADER_ITEM_QUERY}>
          {({ loading, data }: { loading: boolean; data: HeaderItemQuery }) => {
            return loading ? <>Loading...</> : createTables(data);
          }}
        </Query>
      </Container>
    </ApolloProvider>
  );
}

export default App;
