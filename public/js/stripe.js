/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51MWbW6SDgKST7iTwxU7eSlhQNW6PqiJuOoHl5tAerTB6JEjVwSvgYLaz5g7g6PMXm2fcuC5B2GMWpgv89JbstOLE00hf89wEOk',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get Checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);
    // 2) Create Checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log('stripe.js: ', err);
    showAlert('Error', err);
  }
};
