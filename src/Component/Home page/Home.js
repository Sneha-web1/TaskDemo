import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Heading from '../Heading/Heading';
import SideSection from '../SideSection/SideSection';
import Service1 from '../../Assets/service1.png';
import Service2 from '../../Assets/service2.png';
import Service3 from '../../Assets/service3.png';
import Service4 from '../../Assets/service4.png';
import tasklist1 from '../../Assets/tasklist1.jpeg';
import tasklist2 from '../../Assets/tasklist2.jpeg';
import tasklist3 from '../../Assets/tasklist3.jpeg';
import tasklist4 from '../../Assets/tasklist4.jpeg';
import MiddleSection from '../MiddleSection/MiddleSection';
import Slider from "../Slider/Slider";
import Footer from '../Footer/Footer';
import './Home.css';
import Task from '../Task/Task';
import Testinomial from '../Testinomial/Testinomial';
const Home = () => {
  const heading1 =
    "Creativity drives our approach to developing unique and effective solutions. We harness imaginative thinking to deliver innovative strategies and breakthrough results.";
  const heading2 =
    "Superiority reflects our commitment to delivering exceptional standards and outstanding results. We ensure that every solution and service we provide stands out in quality and effectiveness.";
  const heading3 =
    "Coordination underscores our focus on seamless teamwork and effective integration. We work closely with our clients to ensure that every project achieves optimal results through well-orchestrated efforts.";
  const heading4 =
    "Adaptable Partnerships emphasize our commitment to tailoring our services to meet diverse client needs. We adjust our approach to ensure flexibility and responsiveness in every engagement.";
  const desc1 = "Basic requirements - 20+ age, Good typing skills, Basic English, Android mobile required with good internet connectivity."
  const desc2 = "Basic requirements - 20+ age, Good typing skills, good knowledge of ChatGPT, Quick learner, Android mobile required with good internet connectivity."
  const desc3 = "Basic Requirements: 18+ Age, Good Communication."
  const desc4 = "Basic Requirements: 18+ Age, Computer knowledge."
  return (
    <div>
      <Header />
      <Slider />
      <Heading title="WHAT WE DO ?" />
      <div className="container">
        <div className="row">
          {/* Pass props correctly */}
          <SideSection img={Service1} heading={heading1} title="Creativity" />
          <SideSection img={Service2} heading={heading2} title="Superiority" />
          <SideSection img={Service3} heading={heading3} title="Coordination" />
          <SideSection img={Service4} heading={heading4} title="Adaptable Partnerships" />
        </div>
        <div className='text-center'>

          <button type="button" class="btn btn-primary"> All Services </button>

        </div> 
      </div>
      <div className="bgwhite1">
        <Heading title="WHY CHOOSE US ?" />
        <MiddleSection />
      </div>
      <Heading title="HERE IS TASK" />
      <div className='container mb-5'>
        <div className='float'>
          <div className="row"> 
            <Task img={tasklist1} title="Data Scrapping" description={desc1} earning="40000" />
            <Task img={tasklist2} title="Store near me" description={desc2} earning="30000" />
            <Task img={tasklist3} title="Prompt Pairing" description={desc3} earning="30000" />
            <Task img={tasklist4} title="Profile Creation" description={desc4} earning="30000" />
          </div>
        </div>
      </div>
      <Heading title="WHAT CLIENTS SAY ?" />
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div> 
          <Testinomial/>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;