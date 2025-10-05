import React from "react";
import { Container, Card } from "react-bootstrap";

const TermsAndCondition = () => {
  return (
    <Container className="py-5 px-3 px-md-5" style={{ background: "#F8F9FA", minHeight: "100vh" }}>
      <Card className="shadow-lg border-0 mx-auto" style={{ maxWidth: 900 }}>
        <Card.Body>
          <h1 className="fw-bold mb-4" style={{ color: "#2D5A88" }}>Terms and Conditions</h1>
          <p className="mb-4 text-muted">
            Please read these terms and conditions carefully before using our rental clothing services.
          </p>

          <h4 className="fw-bold mt-4 mb-2">1. Rental Agreement</h4>
          <ul>
            <li>
              By renting any clothing item from our website, you agree to abide by all terms and conditions stated herein.
            </li>
            <li>
              The rental period starts from the date of delivery and ends on the agreed return date.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">2. User Responsibilities</h4>
          <ul>
            <li>
              You must provide accurate and complete information during the booking process.
            </li>
            <li>
              You are responsible for the care and timely return of the rented clothing.
            </li>
            <li>
              Any loss, damage, or stains to the clothing may result in additional charges.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">3. Payment & Charges</h4>
          <ul>
            <li>
              All rental charges, taxes, and delivery fees must be paid in advance.
            </li>
            <li>
              Late returns will incur additional daily charges as per the rental rate.
            </li>
            <li>
              In case of cancellation, refunds are processed as per our cancellation policy.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">4. Delivery & Return</h4>
          <ul>
            <li>
              We strive to deliver your selected clothing on or before the scheduled date.
            </li>
            <li>
              Please ensure the clothing is returned in the same condition as received, including all accessories.
            </li>
            <li>
              Pickup or return instructions will be provided at the time of booking.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">5. Hygiene & Quality</h4>
          <ul>
            <li>
              All clothing is professionally dry-cleaned and sanitized before each rental.
            </li>
            <li>
              We ensure quality checks for every item before dispatch.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">6. Identification & Verification</h4>
          <ul>
            <li>
              You may be required to provide a valid government-issued ID proof for verification.
            </li>
            <li>
              We reserve the right to decline service if the information provided is found to be false or incomplete.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">7. Cancellation & Refund Policy</h4>
          <ul>
            <li>
              Cancellations are allowed up to 24 hours before the scheduled delivery for a full refund.
            </li>
            <li>
              No refund will be provided for cancellations made after the dispatch of the item.
            </li>
            <li>
              Refunds will be processed within 3-5 business days after approval.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">8. Privacy & Data Protection</h4>
          <ul>
            <li>
              We respect your privacy and protect your personal information as per our Privacy Policy.
            </li>
            <li>
              Your data will not be shared with third parties except as required for order processing.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">9. Limitation of Liability</h4>
          <ul>
            <li>
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our service.
            </li>
            <li>
              Our liability is limited to the amount paid for the rental service.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">10. Changes to Terms</h4>
          <ul>
            <li>
              We reserve the right to update or modify these terms at any time. Changes will be posted on this page.
            </li>
          </ul>

          <h4 className="fw-bold mt-4 mb-2">11. Contact Us</h4>
          <ul>
            <li>
              For any questions or concerns regarding these terms, please contact us at <a href="mailto:support@rentmystyle.com">support@rentmystyle.com</a>.
            </li>
          </ul>

          <div className="mt-5 text-muted small">
            Last updated: 3 October 2025
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TermsAndCondition