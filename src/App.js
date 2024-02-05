import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import BgVideo from './components/body-bg-video/BgVideo';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  if (window.location.pathname === "/") {
    document.body.classList.add("landing");
  } else {
    document.body.classList.remove("landing");
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          // <Route path="/" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <BgVideo />
      </BrowserRouter>
    </>
  );
}



export default App;
