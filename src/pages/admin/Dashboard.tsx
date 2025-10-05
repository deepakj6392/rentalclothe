import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import userService from '../../services/user.service';
import orderService from '../../services/order.service';
import clotheService from '../../services/clothe.service';
import Users from './Users';
import Orders from './Orders';
import ClotheListings from './ClotheListings';

interface Order {
  _id: string;
  orderId: string;
  totalPrice: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
  user?: { firstName: string; lastName: string };
}

const Dashboard: React.FC = () => {
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const [usersRes, ordersRes, productsRes] = await Promise.all([
        userService.getAllUsers({ limit: 1000 }),
        orderService.getAllOrders({ limit: 1000 }),
        clotheService.getAllProducts({ limit: 1000 }),
      ]);

      const totalUsers = usersRes.totalRecord || usersRes.data.length;
      const totalOrders = ordersRes.totalRecord || ordersRes.data.length;
      const totalProducts = productsRes.totalRecord || productsRes.data.length;
      const totalRevenue = ordersRes.data.reduce((sum: number, order: Order) => sum + order.totalPrice, 0);

      setAnalytics({ totalUsers, totalOrders, totalProducts, totalRevenue });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  const chartData = [
    { name: 'Users', value: analytics.totalUsers },
    { name: 'Orders', value: analytics.totalOrders },
    { name: 'Products', value: analytics.totalProducts },
    { name: 'Revenue', value: analytics.totalRevenue },
  ];

  return (
    <Container className="mt-4">
      <h1>Admin Dashboard</h1>

      {/* Analytics Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text className="h2 text-primary">{analytics.totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Orders</Card.Title>
              <Card.Text className="h2 text-success">{analytics.totalOrders}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text className="h2 text-warning">{analytics.totalProducts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Revenue</Card.Title>
              <Card.Text className="h2 text-danger">₹{analytics.totalRevenue}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Analytics Chart */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>Analytics Overview</Card.Header>
            <Card.Body>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Tabs defaultActiveKey="orders" id="admin-dashboard-tabs" className="mb-3">
        <Tab eventKey="orders" title="Orders" tabClassName='text-primary'>
          <Orders />
        </Tab>
        <Tab eventKey="users" title="Users" tabClassName='text-primary'>
          <Users />
        </Tab>
        <Tab eventKey="products" title="Clothes" tabClassName='text-primary'>
          <ClotheListings />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
