import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Template
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
// Pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Metaverses } from "./pages/Metaverses";
import { Categories } from "./pages/Categories";
import { Success } from "./pages/Success";
import { Lands } from "./pages/Lands";
import { Reservation } from "./pages/Reservation";

import { DateRangeProvider } from "./context/DateRangeProvider";
import { AuthProvider } from "./providers/AuthProvider";

import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <DateRangeProvider>
          <Header />
          <Main>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/metaverses/:metaverseId" element={<Metaverses />} />
              <Route path="/categories/:categoryId" element={<Categories />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/lands" element={<Lands />} />
              <Route path="/lands/:landId" element={<ProductDetails />} />
              <Route path="/reservation/:landId" element={<Reservation />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </Main>
          <Footer />
        </DateRangeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
