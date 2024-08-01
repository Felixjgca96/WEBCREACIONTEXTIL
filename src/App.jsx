import Routes from "./routes/Routes";

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
