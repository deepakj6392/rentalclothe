import { Container, Card } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="py-5 px-3 px-md-5" style={{ background: "#F8F9FA", minHeight: "100vh" }}>
      <Card className="shadow-lg border-0 mx-auto" style={{ maxWidth: 900 }}>
        <Card.Body>
          <h1 className="fw-bold mb-4" style={{ color: "#2D5A88" }}>Privacy Policy</h1>
          <p className="mb-4 text-muted">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our rental clothing website and services.
          </p>

          <h4 className="fw-bold mt-4 mb-2">1. Information We Collect</h4>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, address, and ID proof for order processing and verification.
            </li>
            <li>
              <strong>Payment Information:</strong> Payment details are processed securely via trusted payment gateways. We do not store your card details.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and device information.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">2. How We Use Your Information</h4>
          <ul>
            <li>To process and fulfill your rental orders.</li>
            <li>To communicate with you about your orders, account, or customer service requests.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To comply with legal obligations and prevent fraud.</li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">3. Sharing Your Information</h4>
          <ul>
            <li>
              We do not sell or rent your personal information to third parties.
            </li>
            <li>
              We may share your information with trusted partners for order delivery, payment processing, or legal compliance.
            </li>
            <li>
              Your data may be disclosed if required by law or to protect our rights and safety.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">4. Data Security</h4>
          <ul>
            <li>
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
            </li>
            <li>
              Despite our efforts, no method of transmission over the Internet is 100% secure.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">5. Cookies & Tracking</h4>
          <ul>
            <li>
              We use cookies and similar technologies to enhance your browsing experience and analyze website usage.
            </li>
            <li>
              You can manage cookie preferences in your browser settings.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">6. Your Rights</h4>
          <ul>
            <li>
              You may access, update, or request deletion of your personal information by contacting us.
            </li>
            <li>
              You may opt out of marketing communications at any time.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">7. Children's Privacy</h4>
          <ul>
            <li>
              Our services are not intended for children under 13. We do not knowingly collect data from children.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">8. Changes to This Policy</h4>
          <ul>
            <li>
              We may update this Privacy Policy from time to time. Changes will be posted on this page.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">9. Contact Us</h4>
          <ul>
            <li>
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@rentmystyle.com">support@rentmystyle.com</a>.
            </li>
          </ul>

          <div className="mt-5 text-muted small">
            Last updated: 3 October 2025
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;