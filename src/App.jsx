import Routes from "./routes/Routes";

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import ButtonWa from "./components/ButtonWa"

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <ButtonWa/>
      <Footer />
    </Layout>
  );
}

export default App;
