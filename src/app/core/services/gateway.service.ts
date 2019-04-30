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
import { Auth } from './auth.service';

@Injectable()
export class GatewayService {
  constructor(apollo: Apollo, httpLink: HttpLink, private auth: Auth) {
    const http = httpLink.create({
      uri: `${environment.protocol}://${environment.graphApiEndpoint}/graphql`,
      withCredentials: true
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

    const authContext = setContext(async (_, { headers }) => {
      const token = this.auth.getCachedAccessToken();
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
