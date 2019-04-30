import { Injectable } from '@angular/core';
import { HttpLink } from 'apollo-angular-link-http';
import { Apollo } from 'apollo-angular';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { environment } from '../../../environments/environment';

@Injectable()
export class GatewayService {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({
      uri: `${environment.protocol}://${environment.graphApiEndpoint}/graphql`
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (networkError) {
        const e = networkError as any;
        if (e.statusCode === 401) {
          // auth.startSignoutMainWindow();
        }
      }

      if (graphQLErrors) {
        console.log(graphQLErrors);
      }
    }) as any;

    const authContext = setContext((_, { headers }) => {
      const token = null;
      if (!null) {
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
          }
        };
      }
    });

    apollo.create({
      link: errorLink.concat(authContext.concat(http)),
      cache: new InMemoryCache()
    });
  }
}
