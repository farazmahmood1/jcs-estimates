import React from 'react';

const Faq = () => {
  return (
    <div>
      {/* FAQ Section */}
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg" />
              </div>
              FAQ
            </span>
            <h2 className="sec-title">
              Got Questions?  <span className="text-theme">We Have Answers!</span>
            </h2>
          </div>
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-6 mb-4">
              <div className="accordion-area accordion" id="faqAccordion">
                {/* Question 1 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      What services does JCS offer?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        JCS specializes in special construction, quantity takeoffs, cost estimations, material lists, bid forms, and request for quotations (RFQ). Our team ensures precision, efficiency, and innovation in every project.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="accordion-card style2 active">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-2"
                    >
                      How accurate are your cost estimations?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our cost estimations are meticulously prepared using advanced tools and industry standards. We ensure accuracy by cross-verifying quantities, analyzing project components, and collaborating with clients for adjustments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Can you help with both residential and commercial projects?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Absolutely! JCS has extensive experience in both residential and commercial projects. Whether you're building a home or managing a large-scale development, we tailor our services to meet your specific needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      How do you ensure transparency in your processes?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Transparency is at the core of our operations. From detailed documentation to standardized bid forms, we ensure clarity at every step. Our team is always available to address your queries and provide updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-6">
              <div className="accordion-area accordion" id="faqAccordion2">
                {/* Question 5 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >
                      What is included in Special Construction?
                    </button>
                  </div>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-5"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Estimates for specialized structures like clean rooms, vaults, or blast-resistant buildings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 6 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-6"
                      aria-expanded="false"
                      aria-controls="collapse-6"
                    >
                      How long does it take to prepare an estimate?
                    </button>
                  </div>
                  <div
                    id="collapse-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-6"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        The timeline depends on the complexity of the project. For standard projects, we typically deliver estimates within 3-5 business days. Larger or more intricate projects may require additional time for thorough analysis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 7 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-7"
                      aria-expanded="false"
                      aria-controls="collapse-7"
                    >
                      Do you offer consultation services?
                    </button>
                  </div>
                  <div
                    id="collapse-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-7"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Yes, we provide expert consultation services to guide you through every stage of your project. Our team will work closely with you to understand your goals and develop a strategy that aligns with your vision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 8 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-8"
                      aria-expanded="false"
                      aria-controls="collapse-8"
                    >
                      Can I request revisions to your designs or estimates?
                    </button>
                  </div>
                  <div
                    id="collapse-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-8"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Absolutely! We value feedback and are committed to delivering results that meet your expectations. Revisions are included as part of our process to ensure complete satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 9 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-9">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-9"
                      aria-expanded="false"
                      aria-controls="collapse-9"
                    >
                      How can I get started with JCS?
                    </button>
                  </div>
                  <div
                    id="collapse-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-9"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Getting started is easy! Simply reach out to us via phone or email, and our team will schedule a consultation to discuss your project requirements. From there, we’ll create a customized plan to bring your ideas to life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;