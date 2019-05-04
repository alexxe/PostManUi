import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Auth } from '../core/services/auth.service';
import { environment } from '../../environments/environment';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const uri = `${environment.protocol}://${environment.graphApiEndpoint}/graphql`;
export function createApollo(httpLink: HttpLink, auth: Auth) {
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
    let token = auth.getCachedAccessToken();
    if (!token) {
      // An observable to fetch a new token
      // Converted .toPromise()
      await auth.acquireToken().toPromise();

      // Set new token to the response (adal puts the new token in storage when fetched)
      token = auth.getCachedAccessToken();
    }
    if (token) {
      console.log('graphQL set token');
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      };
    }
  });
  return {
    link: errorLink.concat(authContext.concat(http)),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, Auth]
    }
  ]
})
export class GraphQLModule {}
