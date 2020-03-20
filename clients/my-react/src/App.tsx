import React from "react";
import "./App.css";
import { Query } from "react-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./GraphQlClient";
import { Table, Container } from "react-bootstrap";
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
    <>
      {data.headers.map(h => (
        <Table key={h.title}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Type</td>
              <td>Created At</td>
            </tr>
          </thead>
          <tbody>
            {h.items.map(i => (
              <tr key={h.title + "-" + i.title}>
                <td>{i.title}</td>
                <td>{i.type}</td>
                <td>{i.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </>
  );
  return (
    <ApolloProvider client={client}>
      <Container>
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
