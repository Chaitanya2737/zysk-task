import CompanyOverview from './components/CompanyOverview';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
 <div className='bg-slate-50/10 mx-3 md:mx-16  lg:mx-18 xl:mx-24' >
  <Navbar/> 
  <Hero /> 
  <Feature />
 </div>
  );
}

export default App;
