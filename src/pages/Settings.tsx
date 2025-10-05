import React, { useEffect, useState } from "react";
import { Tabs, Tab, Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import userService from "../services/user.service";
import { IUser } from "../core/interfaces/user";

const Settings = () => {
  const [key, setKey] = useState("profile");
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    setLoading(true);
    userService.getProfile()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load user profile.");
        setLoading(false);
      });
  }, []);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!user) return;
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleProfileSave = () => {
    if (!user) return;
    setLoading(true);
    userService.updateProfile(user)
      .then(() => {
        setSuccess("Profile updated successfully.");
        setError(null);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to update profile.");
        setSuccess(null);
        setLoading(false);
      });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handlePasswordSave = () => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setError("New passwords do not match.");
      setSuccess(null);
      return;
    }
    setLoading(true);
    userService.changePassword({
      oldPassword: passwordData.oldPassword,
      newPassword: passwordData.newPassword,
    })
      .then(() => {
        setSuccess("Password changed successfully.");
        setError(null);
        setPasswordData({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to change password.");
        setSuccess(null);
        setLoading(false);
      });
  };

  return (
    <Container className="py-4">
      <h2>Settings</h2>
      <Tabs activeKey={key} onSelect={(k) => setKey(k || "profile")} className="mb-3" >
        <Tab eventKey="profile" title="Profile" tabClassName="text-primary" >
          {loading && !user ? (
            <Spinner animation="border" />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : user ? (
            <Form>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleProfileChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleProfileChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={user.email} readOnly />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleProfileChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={user.address}
                  onChange={handleProfileChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleProfileSave} disabled={loading}>
                {loading ? "Saving..." : "Save Profile"}
              </Button>
              {success && <Alert variant="success" className="mt-3">{success}</Alert>}
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            </Form>
          ) : null}
        </Tab>
        <Tab eventKey="orders" title="Orders" tabClassName="text-primary">
          <p>Orders tab content coming soon...</p>
        </Tab>
        <Tab eventKey="changePassword" title="Change Password" tabClassName="text-primary">
          <Form>
            <Form.Group className="mb-3" controlId="oldPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmNewPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmNewPassword"
                value={passwordData.confirmNewPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handlePasswordSave} disabled={loading}>
              {loading ? "Changing..." : "Change Password"}
            </Button>
            {success && <Alert variant="success" className="mt-3">{success}</Alert>}
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          </Form>
        </Tab>
        <Tab eventKey="moreOptions" title="More Options" tabClassName="text-primary">
          <p>More options content coming soon...</p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Settings;
