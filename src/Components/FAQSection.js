import React from "react";
import "./FAQSection.css";
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from "react";

const FAQSection = () => {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import('aos');
      AOS.init({ duration: 1000 });
    };
    loadAOS();
  }, []);

  return (
    <section className="section-bg faq-sec">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h1>Frequently Asked Questions</h1>
        </div>

        <Accordion defaultActiveKey="0" className="accordion-list">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="span1">01</span> Tailored AI Solutions: How do we address your unique challenges?
            </Accordion.Header>
            <Accordion.Body style={{textAlign:'left'}}>
              Every business has its unique set of challenges. At Convaite, we pride ourselves on developing custom AI
              solutions tailored to your specific needs, ensuring that you can leverage the full power of AI technologies
              to meet your business objectives efficiently.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
            <span className="span1">02</span> Expertise & Experience: What sets our team apart?
            </Accordion.Header>
            <Accordion.Body style={{textAlign:'left'}}>
              Our team consists of industry-leading AI experts and data scientists with years of experience in deploying AI
              technologies across various sectors. This deep expertise allows us to deliver solutions that are not only innovative
              but also practical and effective.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
            <span className="span1">03</span> Continuous Support & Evolution: How do we ensure your AI solutions remain cutting-edge?
            </Accordion.Header>
            <Accordion.Body style={{textAlign:'left'}}>
              AI technology evolves rapidly. We ensure that your business stays ahead by offering continuous support and updates
              to your AI solutions. Our commitment is to not just launch solutions but to evolve them alongside your growing needs
              and the advancements in AI technology.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
