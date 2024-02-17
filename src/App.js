import "./App.css";
import ThemeProviders from "./components/providers/ThemeProvider";
import AppRouter from "./components/routes/AppRouter";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <ThemeProviders>
        <Layout>
          <AppRouter />
        </Layout>
      </ThemeProviders>
    </div>
  );
}

export default App;
