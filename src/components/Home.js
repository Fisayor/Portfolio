import React from 'react'
import Fissy from '../assets/Fissy.jpg'
import Accordion from 'react-bootstrap/Accordion'


const Home = () => {
  return (
    <section>
      <div className="hero">
        <h1 className="name">OLUWAFISAYO OWOYELE</h1>
        <ul>
          <h3 className="role2">Software Developer</h3>
          <br></br>
          <h3 className="role2">3D Character Artist</h3>
          <br></br>
          <h3 className="role2">Product Specialist</h3>
        </ul>

        <img src={Fissy} alt="picture"></img>
      </div>

      <div className="about" id="about">
        <h2>About Fisayo</h2>
        <p>
          A value enabler and resourceful Graduate of Computer Science, with
          over 5years cognate experience cutting across Product Development,
          Client Relationship Management and Strategic Business Support
          Solutions. One who is vast in hospitality management systems and
          operations. Skilled at superior client relationship management,
          product improvement, business drive, and the ability to successfully
          integrate operations and strategy to drive profitability. This
          increased organizational bottom-line and impacted profitability. With
          the blend of strategic business support solutions and superior client
          relationship management, Oluwafisayo seeks to work with an
          organization where she can champion business drive.
        </p>
      </div>

      <div className="experience" id="experience">
        <h2>Experience</h2>
        <ul>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>TD AFRICA</Accordion.Header>
              <Accordion.Body>
                <li>
                  <b>Software Engineer</b>
                </li>
                <li>
                  Frontend Developer. Management and building of applications
                </li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>CURRENT LINK SYSTEMS</Accordion.Header>
              <Accordion.Body>
                <li>
                  <b>Product Specialist</b>
                </li>
                <li>
                  {" "}
                  Undertakes installation, configuration and setup of a
                  hospitality management system to support organizational
                  operations{" "}
                </li>
                <li>
                  Undertakes database management of the clients of the company{" "}
                </li>
                <li>
                  Provides technical and I.T support to enhance daily business
                  operation{" "}
                </li>
                <li>
                  Effectively provides client support solutions which increased
                  efficiency
                </li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>INTERNET SOLUTIONS</Accordion.Header>
              <Accordion.Body>
                <li>
                  <b>customer Service Officer</b>
                </li>
                <li>
                  Successfully managed both inbound and outbound correspondences
                </li>
                <li>
                  Carefully identified customer’s needs, clarified their
                  requests, researched customers’ buying behaviors and
                  recommended solutions
                </li>
                <li>
                  Provided superior customer experience at all touch points 
                  Effectively managed and updated customers’ records on regular
                  bases
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ul>
      </div>

      <div className="contact" id="contact">
        <h2>CONTACT </h2>
        <h4>Email: oluwafisayoowoyele@gmail.com</h4>
      </div>
    </section>
  );
}

export default Home
