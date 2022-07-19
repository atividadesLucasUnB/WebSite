import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_URL,
    headers: {
        'Autorization': 'Bearer ' + import.meta.env.VITE_TOKEN
    },
    cache: new InMemoryCache()
})