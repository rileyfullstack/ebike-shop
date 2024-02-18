import "./App.css";
import CurrencyProvider from "./components/providers/CurrencyProvider"; // Adjusted import to use CurrencyProvider
import ThemeProviders from "./components/providers/ThemeProvider";
import { UserProvider } from "./components/providers/UserProvider";
import AppRouter from "./components/routes/AppRouter";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <ThemeProviders>
        <UserProvider>
          <CurrencyProvider> 
            <Layout>
              <AppRouter />
            </Layout>
          </CurrencyProvider>
        </UserProvider>
      </ThemeProviders>
    </>
  );
}

export default App;
