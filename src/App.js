import Analytics from './components/Analytics';
import Blog from './components/blog';
import CompanyOverview from './components/CompanyOverview';
import Enquiry from './components/Enquiry';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ManagerReview from './components/ManagerReview';
import Navbar from './components/Navbar';
import Trial from './components/Trial';

function App() {
  return (
 <div className='bg-slate-50/10 mx-3 md:mx-16  lg:mx-18 xl:mx-24' >
  <Navbar/> 
  <Hero /> 
  <Feature />
  <ManagerReview />
  <Analytics />
  <Enquiry />
  <Blog />
  <Trial />
  <Footer />
 </div>
  );
}

export default App;
