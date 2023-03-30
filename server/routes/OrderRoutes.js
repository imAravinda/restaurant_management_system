import express from 'express';
import {CheckOrderDetails, confirmDelivery, OrderItem, PlaceOrderByStaffMember, SendOrderConfrimation, ViewAllOrders, ViewOrder, viewOrdersOrderedByCustomer, ViewPendingOrders } from '../controllers/OrderController.js';


const OrderRoutes = express.Router();

OrderRoutes.route('/OrderItem').post(OrderItem);
OrderRoutes.route('/PendingOrders').get(ViewPendingOrders);
OrderRoutes.route('/Orders').get(ViewAllOrders);
OrderRoutes.route('/Order/:id').get(ViewOrder);
OrderRoutes.route('/OrderConfirmation/:_id').post(SendOrderConfrimation);
OrderRoutes.route('/Deliverer/OrderDetails').get(CheckOrderDetails);
OrderRoutes.route('/staffmemberorderItem').post(PlaceOrderByStaffMember);
OrderRoutes.route('/Deliverer/ConfirmDelivery/:_id').post(confirmDelivery);
OrderRoutes.route('/Customer/Orders').get(viewOrdersOrderedByCustomer);

export default OrderRoutes;  