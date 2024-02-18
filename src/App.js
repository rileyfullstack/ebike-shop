import "./App.css";
import ThemeProviders from "./components/providers/ThemeProvider";
import { UserProvider } from "./components/providers/UserProvider";
import AppRouter from "./components/routes/AppRouter";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <ThemeProviders>
        <UserProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </UserProvider>
      </ThemeProviders>
    </div>
  );
}

export default App;
