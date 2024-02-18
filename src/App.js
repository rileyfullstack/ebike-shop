import "./App.css";
import ThemeProviders from "./components/providers/ThemeProvider";
import { UserProvider } from "./components/providers/UserProvider";
import AppRouter from "./components/routes/AppRouter";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <ThemeProviders>
        <UserProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </UserProvider>
      </ThemeProviders>
    </>
  );
}

export default App;
