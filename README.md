# Day 15: Bootstrap 5 Components Master Guide & Sample Codes 🧩📦

A comprehensive guide and production-ready code implementation covering **Bootstrap 5 UI Components**, theoretical architecture, the Data Attributes API, JavaScript triggers, and practical React implementations.

---

## 📑 Table of Contents
1. [Component-Driven Architecture in Bootstrap 5](#component-driven-architecture-in-bootstrap-5)
2. [Data Attributes API vs. JavaScript API](#data-attributes-api-vs-javascript-api)
3. [Navigation & Content Organization](#navigation--content-organization)
   - Navbar & Responsive Toggler
   - Navs & Dynamic Content Tabs
   - Breadcrumbs & Pagination
4. [Interactive Overlays & Feedback](#interactive-overlays--feedback)
   - Modals
   - Offcanvas (Slide-out Drawers)
   - Toasts & Notifications
5. [Data Display & Media Components](#data-display--media-components)
   - Accordions (Collapsible Content)
   - Carousels (Image / Content Sliders)
   - Cards & List Groups
6. [Indicators, Actions & Loaders](#indicators-actions--loaders)
   - Spinners & Animated Progress Bars
   - Button Groups & Badges
7. [Advanced Forms & Validation](#advanced-forms--validation)
   - Floating Labels & Input Groups
   - Form Validation States (`is-valid`, `is-invalid`)
8. [React Component & Code Walkthrough](#react-component--code-walkthrough)

---

## Component-Driven Architecture in Bootstrap 5

Bootstrap 5 provides a battle-tested library of pre-built, accessible UI components.
Key architectural principles include:
* **Separation of Concerns**: Markup uses semantic class hierarchies (e.g. `.modal` > `.modal-dialog` > `.modal-content` > `.modal-header` / `.modal-body` / `.modal-footer`).
* **Zero jQuery Dependency**: All interactive components are powered by modern native JavaScript.
* **Accessibility (a11y) Built-in**: ARIA roles, keyboard focus traps (for modals), and screen-reader utilities (`visually-hidden`).

---

## Data Attributes API vs. JavaScript API

Bootstrap components can be controlled in two ways:

### 1. Data Attributes API (No JS writing required)
Add `data-bs-*` attributes directly to HTML elements:
```html
<!-- Triggers a modal with id="userModal" -->
<button 
  type="button" 
  class="btn btn-primary" 
  data-bs-toggle="modal" 
  data-bs-target="#userModal"
>
  Launch Modal
</button>
```

### 2. JavaScript API (Programmatic Control)
```javascript
// Initialize and show modal programmatically
const myModal = new bootstrap.Modal(document.getElementById('userModal'), {
  keyboard: false
});
myModal.show();
```

---

## Navigation & Content Organization

### 1. Navs & Tabs (Dynamic View Switching)
```html
<!-- Nav Tab Controls -->
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#tab-overview">
      Overview
    </button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-features">
      Features
    </button>
  </li>
</ul>

<!-- Tab Panels -->
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="tab-overview">Overview content here...</div>
  <div class="tab-pane fade" id="tab-features">Feature details here...</div>
</div>
```

---

## Interactive Overlays & Feedback

### 1. Modals (Dialog Windows)
Modals provide focused interaction without navigating away from the page:
```html
<div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content shadow-lg border-0 rounded-4">
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title fw-bold" id="modalTitle">Confirm Action</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-secondary">
        Are you sure you want to proceed with this operation?
      </div>
      <div class="modal-footer border-top-0">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  </div>
</div>
```

### 2. Offcanvas (Slide-out Drawer)
Ideal for mobile navigation menus, filter panels, or shopping carts:
```html
<!-- Trigger Button -->
<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas">
  Open Drawer
</button>

<!-- Offcanvas Element -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarOffcanvas">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Navigation Drawer</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Dashboard</li>
      <li class="list-group-item">Analytics</li>
      <li class="list-group-item">Settings</li>
    </ul>
  </div>
</div>
```

### 3. Toasts (Non-Intrusive Notifications)
```html
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div class="toast show shadow" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header bg-primary text-white">
      <strong class="me-auto">Notification</strong>
      <small>Just now</small>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Data synced successfully to the server!
    </div>
  </div>
</div>
```

---

## Data Display & Media Components

### 1. Accordion (Collapsible Panels)
Great for FAQs and multi-section guides:
```html
<div class="accordion" id="faqAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
        What is Bootstrap 5?
      </button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Bootstrap is a modern, responsive frontend framework for building mobile-first websites.
      </div>
    </div>
  </div>
</div>
```

### 2. Carousel (Content & Image Slider)
```html
<div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner rounded-3">
    <div class="carousel-item active">
      <div class="p-5 bg-dark text-white text-center">
        <h3>Slide 1: Fast Prototyping</h3>
      </div>
    </div>
    <div class="carousel-item">
      <div class="p-5 bg-primary text-white text-center">
        <h3>Slide 2: Responsive by Default</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

---

## Indicators, Actions & Loaders

### Spinners & Progress Bars
```html
<!-- Spinners -->
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Progress Bar with Animation -->
<div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 75%">
    75%
  </div>
</div>
```

---

## Advanced Forms & Validation

### Floating Labels & Input Groups
```html
<!-- Floating Label -->
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>

<!-- Input Group with Addon -->
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username" />
</div>
```

---

## 💻 Included Files & Code

1. **`src/components/BootstrapComponentsDemo.jsx`**:
   - Complete interactive React component with:
     - Modal Dialog with toggle states
     - Interactive Accordion FAQ
     - Content Tabs (Cards, Alerts/Badges, Spinners/Progress)
     - Interactive Toast notification trigger
     - Offcanvas mobile menu drawer
2. **`src/components/BootstrapComponentsDemo.module.css`**:
   - Scoped styling demonstrating custom token overrides for Bootstrap components.
3. **`index.html`**:
   - Standalone browser preview page loading Bootstrap 5.3 CDN directly (CSS + JS bundle) for live testing.
