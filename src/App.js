import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./pages/About";
import AboutTradition from "./pages/AboutTradition";
import Admission from "./pages/Admission";
import Contactus from "./pages/Contactus";
import FeeStructure from "./pages/FeeStructure";
import Howtoregister from "./pages/Howtoregister";
import Withdrawalpolicy from "./pages/Withdrawalpolicy";

import SecretaryMessage from "./pages/About/SecretaryMessage";
import Facilities from "./pages/About/Facilities";
import Mandatory from "./pages/About/Mandatory";
import Mission from "./pages/About/Mission";
import OurHistory from "./pages/About/OurHistory";
import SchoolStructure from "./pages/About/SchoolStructure";
import ApplicationForm from "./pages/Admission/ApplicationForm";
import FeesRules from "./pages/Admission/FeesRules";
import TcForm from "./pages/Admission/TcForm";
import Chhavi from "./pages/Alumnae/Chhavi";
import Harshi from "./pages/Alumnae/Harshi";
import Shruti from "./pages/Alumnae/Shruti";
import Vedita from "./pages/Alumnae/Vedita";
import Studentlife from "./pages/Studentlife";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admission" element={<Admission />} />
        <Route exact path="/facilities" element={<Facilities />} />
        <Route exact path="/studentlife" element={<Studentlife />} />
        <Route exact path="/contactus" element={<Contactus />} />
        <Route exact path="/howtoregister" element={<Howtoregister />} />
        <Route exact path="/feeStructure" element={<FeeStructure />} />
        <Route exact path="/withdrawalpolicy" element={<Withdrawalpolicy />} />
        <Route exact path="/aboutTradition" element={<AboutTradition />} />
        {/* Alumni  */}
        <Route exact path="/shruti" element={<Shruti />} />
        <Route exact path="/vedita" element={<Vedita />} />
        <Route exact path="/chhavi" element={<Chhavi />} />
        <Route exact path="/harshi" element={<Harshi />} />
        <Route exact path="/thanks" element={<Thanks />} />

        <Route exact path="/our-history" element={<OurHistory />} />
        <Route
          exact
          path="/Mandatory-public-disclosure"
          element={<Mandatory />}
        />

        <Route exact path="/Secretary-message" element={<SecretaryMessage />} />
        <Route exact path="/vision-mission-core-values" element={<Mission />} />
        <Route exact path="/facilities" element={<Facilities />} />
        <Route exact path="/school-structure" element={<SchoolStructure />} />

        <Route exact path="/admission-form" element={<ApplicationForm />} />
        <Route exact path="/fees-rules-ragulations" element={<FeesRules />} />
        <Route exact path="/tc-form" element={<TcForm />} />
        <Route exact path="/school-calender" element={<SchoolStructure />} />
      </Routes>
    </Router>
  );
}

export default App;
