import orderService from '@services/order.service';
import React, { useState, useEffect } from 'react';
import { Table,Form, InputGroup, Pagination } from 'react-bootstrap';

interface Order {
  _id: string;
  orderId: string;
  totalPrice: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
  user?: { firstName: string; lastName: string };
}
const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderPage, setOrderPage] = useState(1);
  const [orderSearch, setOrderSearch] = useState('');
  const limit = 10;

  useEffect(() => {
    fetchOrders();
  }, [orderPage, orderSearch]);

  const fetchOrders = async () => {
    try {
      const response = await orderService.getAllOrders({
        skip: (orderPage - 1) * limit,
        limit,
        search: orderSearch,
      });
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search orders..."
          value={orderSearch}
          onChange={(e) => setOrderSearch(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.orderId}</td>
              <td>{order.user ? `${order.user.firstName} ${order.user.lastName}` : 'Guest'}</td>
              <td>₹{order.totalPrice}</td>
              <td>{order.status}</td>
              <td>{order.paymentStatus}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev onClick={() => setOrderPage(Math.max(1, orderPage - 1))} />
        <Pagination.Item active>{orderPage}</Pagination.Item>
        <Pagination.Next onClick={() => setOrderPage(orderPage + 1)} />
      </Pagination>
    </>
  );
};

export default Orders