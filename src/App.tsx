import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardIndex from './pages/Dashboard/Index';
import DashboardMessages from './pages/Dashboard/Messages';
import IntroLogo from './components/IntroLogo';

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Index />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:projectId" element={<ProjectDetails />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:serviceId" element={<ServiceDetails />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blogs/:blogId" element={<BlogPost />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<TermsOfService />} />
    <Route path="/cookies" element={<CookiePolicy />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashboardLayout>
            <DashboardIndex />
          </DashboardLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/dashboard/messages"
      element={
        <ProtectedRoute>
          <DashboardLayout>
            <DashboardMessages />
          </DashboardLayout>
        </ProtectedRoute>
      }
    />
    {/* 404 Page */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

function App() {
  console.log('App component rendering');
  
  return (
    <Router>
      <AuthProvider>
        <IntroLogo />
        <ScrollToTop />
        <Toaster />
        <FloatingButtons />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
