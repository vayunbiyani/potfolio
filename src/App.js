import './App.css';
import { Header } from './Header';
import { ContactSection } from './Contact';
import { LandingSection } from './Landing';
import { ProjectsSection } from './Projects';


const App = () => {
  return (
    <div>
      
      <Header />
      <LandingSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default App;
