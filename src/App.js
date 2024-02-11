import "./App.css";
import AppRouter from "./components/routes/AppRouter";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
