// ViewPayment.jsx
import React from 'react';
import '../assets/css/ViewPayment.css';
import Navbar from './Navbar';

function ViewPayment() {
  return (
    <div>
      <Navbar />
      <div className="payment-history-container">
        <h2 className="payment-history-header">Payment History</h2>
        <table className="payment-table">
          <thead>
            <tr>
              <th>PaymentId</th>
              <th>UserId</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Payment Date</th>
              <th>Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>
                <select className="status-select" defaultValue="Pending">
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                </select>
              </td>
              <td>$100000</td>
              <td>Jan 18, 2024</td>
              <td>Netbanking</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewPayment;