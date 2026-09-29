# HomePlate IN — DEMO PROTOTYPE (placeholder name)

Rough-draft clickable prototype of a Fort Wayne / Indiana marketplace for home-made food (Facebook Marketplace × DoorDash), built by Vizie Designs for internal review.

- **Live demo:** https://viziedesigns-gif.github.io/homeplate-in-prototype/
- Static HTML/CSS/JS. The "backend" is your browser's localStorage. Use **Reset demo data** in the footer to start over.
- All sellers, listings and orders are **fictional**. The checkout is a **mock TEST MODE** form: no Stripe connection, and no real payments are processed. Test card `4242 4242 4242 4242` succeeds and `4000 0000 0000 0002` declines.
- Seller onboarding models Indiana Home-Based Vendor rules (IC 16-42-5.3): food handler certificate, cottage-food explainer, a conditional commercial-kitchen step, and listing checks against the embedded HBV food matrix (`hbv-matrix.js`). There is also a mock admin approval page.
- **Not legal advice.** Sellers should confirm requirements with the Indiana Department of Health and their local health department.
