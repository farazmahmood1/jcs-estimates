import React from 'react';
import './ProcessSection.css'; // Ensure this file contains the timeline styles
// Ensure this file contains the timeline styles

const ProcessSection = () => {
  const processSteps = [
    { year: 'Step #1', title: 'Project Assessment', description: 'We start by understanding your project requirements, scope, and goals to create a customized plan that aligns with your vision and budget.', accentColor: '#141D38' },
    { year: 'Step #2', title: 'Detailed Analysis', description: 'Our experts conduct a thorough analysis of materials, labor, and resources needed, ensuring every aspect of the project is accounted for accurately.', accentColor: '#106ebe' },
    { year: 'Step #3', title: 'Cost Estimation', description: 'Using our precise estimation techniques, we provide a detailed financial blueprint that covers all costs, helping you stay within budget.', accentColor: '#141D38' },
    { year: 'Step #4', title: 'Proposal & Bid Preparation', description: 'We compile a professional bid proposal, clearly presenting your project’s value and differentiating you as the top choice for success.', accentColor: '#106ebe' },
    { year: 'Step #5', title: 'Review & Feedback', description: 'Our team reviews all estimates and proposals for accuracy and clarity, ensuring we exceed your expectations and meet your standards.', accentColor: '#141D38' },
  ];

  return (
    <section className="process-section" id="process-sec" style={{ padding: "230px 0px 150px 0px" }}>
      <div className="container space text-center">
        <div className="title-area mb-5">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title">
            WORK PROCESS
          </span>
          <h2 className="sec-title">Our <span className="text-theme">Process</span></h2>
          <p className="sec-description">
            Our methodical approach ensures accuracy and precision at every stage, providing comprehensive, dependable estimates and exceptional service.
          </p>
        </div>

        {/* Timeline */}
        <ul className="timeline">
          {processSteps.map((step, index) => (
            <li key={index} style={{ '--accent-color': step.accentColor }}>
              <div className="timeline-date">{step.year}</div>
              <div className="timeline-title">{step.title}</div>
              <div className="timeline-descr">{step.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProcessSection;
