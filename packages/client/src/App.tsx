import React from 'react';
import { Dashboard } from './containers/dashboard';
import Themes from './contexts/Themes';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
});
function App() {
    const [theme, setTheme] = React.useState(Themes.default);
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Dashboard />
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;