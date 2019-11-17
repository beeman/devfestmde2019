import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { WebAuthService } from './auth';
import { environment } from '../environments/environment';
import { ApolloLink, from, split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

@NgModule({
  imports: [CommonModule, ApolloModule, HttpLinkModule],
  exports: [ApolloModule, HttpLinkModule]
})
export class AppGraphQLModule {
  get bearer() {
    return this.auth.token ? `Bearer ${this.auth.token}` : 'null';
  }

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink,
    private auth: WebAuthService
  ) {
    const http = httpLink.create({
      uri: environment.apiUrl
    });

    const authorization = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }) => {
        headers = headers || {};
        return {
          ...headers,
          headers: {
            Authorization: this.bearer
          }
        };
      });

      return forward(operation);
    });

    const ws = new WebSocketLink({
      uri: environment.apiWsUrl,
      options: {
        reconnect: false,
        // timeout: 30000,
        // inactivityTimeout: 30000,
        connectionParams: {
          authorization: this.bearer
        }
      }
    });

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const ops = [
      // 'mutation',
      // 'query',
      'subscription'
    ];
    const link = split(
      ({ query }) => {
        const { kind, operation }: any = getMainDefinition(query);
        return kind === 'OperationDefinition' && ops.includes(operation);
      },
      ws,
      http
    );

    apollo.create({
      link: from([authorization, link]),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      }
    });
  }
}
