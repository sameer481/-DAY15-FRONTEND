import React, { useState } from "react";
import styles from "./BootstrapComponentsDemo.module.css";

/**
 * BootstrapComponentsDemo Component
 * Demonstrates major Bootstrap 5 components:
 * 1. Modals (Dialog overlay with backdrop)
 * 2. Accordions (Collapsible FAQ cards)
 * 3. Dynamic Navs & Tabs (Switching views)
 * 4. Toasts & Alerts (System notifications)
 * 5. Spinners, Progress Bars & Badges
 * 6. Floating Label Forms
 */
const BootstrapComponentsDemo = () => {
  const [activeTab, setActiveTab] = useState("cards");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [progressVal, setProgressVal] = useState(65);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className={`container py-5 ${styles.wrapper}`}>
      {/* Header */}
      <header className="text-center mb-5">
        <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-semibold text-uppercase">
          Day 15: Bootstrap 5 Components
        </span>
        <h1 className="display-5 fw-bold text-dark mt-2">
          Interactive Component Architecture
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Explore modals, offcanvas drawers, collapsible accordions, dynamic tabs,
          spinners, progress bars, and floating form controls.
        </p>

        {/* Action Buttons to Trigger Modals and Toasts */}
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <button
            className="btn btn-primary px-4 py-2 fw-semibold shadow-sm"
            onClick={() => setShowModal(true)}
          >
            Launch Modal Dialog ↗
          </button>
          <button
            className="btn btn-outline-success px-4 py-2 fw-semibold"
            onClick={triggerToast}
          >
            Trigger Toast Alert 🔔
          </button>
        </div>
      </header>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1080 }}>
          <div className="toast show shadow-lg border-0 rounded-3">
            <div className="toast-header bg-success text-white">
              <strong className="me-auto">Notification</strong>
              <small>Just now</small>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
            <div className="toast-body bg-white text-dark">
              🎉 Bootstrap component event triggered successfully!
            </div>
          </div>
        </div>
      )}

      {/* 1. Modal Overlay */}
      {showModal && (
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content shadow-lg border-0 rounded-4">
                <div className="modal-header border-bottom-0 pb-0">
                  <h5 className="modal-title fw-bold text-dark">
                    Bootstrap Modal Component
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body text-secondary py-4">
                  <p className="mb-2">
                    Modals are built with HTML, CSS, and JavaScript. They’re positioned
                    over everything else in the document and remove scroll from the
                    <code>&lt;body&gt;</code> so that modal content scrolls instead.
                  </p>
                  <div className="alert alert-info py-2 px-3 small mb-0">
                    Accessible with keyboard focus trapping and Escape-key closing.
                  </div>
                </div>
                <div className="modal-footer border-top-0 pt-0">
                  <button
                    type="button"
                    className="btn btn-light rounded-pill px-4"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill px-4"
                    onClick={() => {
                      alert("Changes saved!");
                      setShowModal(false);
                    }}
                  >
                    Confirm & Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 2. Navs & Dynamic Content Tabs */}
      <section className="mb-5 bg-white p-4 p-md-5 rounded-4 border shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h2 className="h4 fw-bold text-dark mb-0">1. Navs & Dynamic Tabs</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                className={`nav-link rounded-pill ${activeTab === "cards" ? "active" : ""}`}
                onClick={() => setActiveTab("cards")}
              >
                Cards Grid
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link rounded-pill ${activeTab === "indicators" ? "active" : ""}`}
                onClick={() => setActiveTab("indicators")}
              >
                Indicators & Loaders
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link rounded-pill ${activeTab === "forms" ? "active" : ""}`}
                onClick={() => setActiveTab("forms")}
              >
                Floating Forms
              </button>
            </li>
          </ul>
        </div>

        {/* Tab 1: Cards Grid */}
        {activeTab === "cards" && (
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="bg-primary text-white p-4 text-center">
                  <h4 className="fw-bold mb-0">Standard Card</h4>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="card-title fw-bold">Flexible Content</h5>
                  <p className="card-text text-secondary flex-grow-1">
                    Cards include headers, footers, body content, and image caps with zero layout hacks.
                  </p>
                  <button className="btn btn-outline-primary btn-sm rounded-pill mt-3">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="bg-success text-white p-4 text-center">
                  <h4 className="fw-bold mb-0">List Group Card</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Responsive Design
                    <span className="badge bg-success rounded-pill">Active</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Flexbox Aligned
                    <span className="badge bg-primary rounded-pill">12-col</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Modern ES6 JS
                    <span className="badge bg-dark rounded-pill">v5.3</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="bg-warning text-dark p-4 text-center">
                  <h4 className="fw-bold mb-0">Action Card</h4>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="card-title fw-bold">Call to Action</h5>
                  <p className="card-text text-secondary flex-grow-1">
                    Combine cards with button groups to craft interactive workflow controls.
                  </p>
                  <div className="btn-group w-100 mt-3" role="group">
                    <button type="button" className="btn btn-outline-secondary btn-sm">Edit</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm">Share</button>
                    <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Indicators & Loaders */}
        {activeTab === "indicators" && (
          <div>
            <div className="mb-4">
              <h5 className="fw-semibold text-dark mb-2">Spinners & Loaders</h5>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <div className="spinner-border text-primary" role="status"></div>
                <div className="spinner-border text-success" role="status"></div>
                <div className="spinner-grow text-warning" role="status"></div>
                <div className="spinner-grow text-danger" role="status"></div>
                <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                  Processing...
                </button>
              </div>
            </div>

            <hr className="my-4 text-secondary opacity-25" />

            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-semibold text-dark mb-0">Animated Progress Bar</h5>
                <span className="fw-bold text-primary">{progressVal}%</span>
              </div>
              <div className="progress mb-3" style={{ height: "18px" }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                  style={{ width: `${progressVal}%` }}
                ></div>
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setProgressVal(Math.max(10, progressVal - 15))}
                >
                  -15%
                </button>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => setProgressVal(Math.min(100, progressVal + 15))}
                >
                  +15%
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Floating Forms */}
        {activeTab === "forms" && (
          <form className="p-2" onSubmit={(e) => { e.preventDefault(); alert("Saved!"); }}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatName"
                    placeholder="Sameer"
                    required
                  />
                  <label htmlFor="floatName">Full Name</label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatEmail"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="floatEmail">Email address</label>
                </div>
              </div>
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text">https://github.com/</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-switch mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Enable email notifications
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary px-4 mt-3">
              Save Profile
            </button>
          </form>
        )}
      </section>

      {/* 3. Accordions (Collapsible FAQ Cards) */}
      <section className="mb-5">
        <h2 className="h4 fw-bold text-dark mb-3">2. Accordion Component</h2>
        <div className="accordion shadow-sm rounded-4 overflow-hidden" id="faqAccordion">
          {/* Item 1 */}
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion === 1 ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(1)}
              >
                <strong>What makes Bootstrap 5 components special?</strong>
              </button>
            </h2>
            {activeAccordion === 1 && (
              <div className="accordion-body text-secondary bg-light">
                Bootstrap 5 components are mobile-first, highly accessible, require no
                jQuery, and are customized effortlessly via CSS variables.
              </div>
            )}
          </div>

          {/* Item 2 */}
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion === 2 ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(2)}
              >
                <strong>How do Data Attributes (`data-bs-*`) work?</strong>
              </button>
            </h2>
            {activeAccordion === 2 && (
              <div className="accordion-body text-secondary bg-light">
                Data attributes like <code>data-bs-toggle="modal"</code> or{" "}
                <code>data-bs-dismiss="alert"</code> allow full interactive functionality
                declaratively in HTML without writing custom JavaScript handlers.
              </div>
            )}
          </div>

          {/* Item 3 */}
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion === 3 ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(3)}
              >
                <strong>Can Bootstrap components be used smoothly with React?</strong>
              </button>
            </h2>
            {activeAccordion === 3 && (
              <div className="accordion-body text-secondary bg-light">
                Yes! You can use standard Bootstrap CSS class names directly in React JSX
                using <code>className</code>, or pair them with libraries like React-Bootstrap.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BootstrapComponentsDemo;
