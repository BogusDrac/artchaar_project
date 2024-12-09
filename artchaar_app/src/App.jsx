import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import OrderComponent from "./components/OrderComponent"
import ReviewsComponent from "./components/ReviewsComponent"
import logo from "../src/assets/images/logo.jpg"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF3E0] to-[#FFE5B4] flex items-center justify-center">
        <img
          src={logo}
          alt="Loading Logo"
          className="w-32 h-50 animate-pulse rounded-full"
        />
      </div>
    );
  }

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
