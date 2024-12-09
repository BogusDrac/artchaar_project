import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import OrderComponent from "./components/OrderComponent"
import ReviewsComponent from "./components/ReviewsComponent"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderComponent />} />
        <Route path="/reviews" element={<ReviewsComponent />} />
       </Routes>
      <Footer />
    </Router>
  )
}

export default App
