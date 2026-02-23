import { useSelector } from "react-redux";
// internal
import useCartInfo from "@/hooks/use-cart-info";

const CheckoutOrderArea = ({ checkoutData }) => {
  const { submitting, error } = checkoutData;
  const { cart_products } = useSelector((state) => state.cart);
  const { total: cartTotal } = useCartInfo();

  return (
    <div className="tp-checkout-place white-bg">
      <h3 className="tp-checkout-place-title">Your Order</h3>

      <div className="tp-order-info-list">
        <ul>
          <li className="tp-order-info-list-header">
            <h4>Product</h4>
            <h4>Total</h4>
          </li>

          {cart_products.map((item) => (
            <li key={item._id} className="tp-order-info-list-desc">
              <p>
                {item.title} <span> x {item.orderQuantity}</span>
              </p>
              <span>₹{((item.discountedPrice ?? item.price) * item.orderQuantity).toFixed(2)}</span>
            </li>
          ))}

          <li className="tp-order-info-list-subtotal">
            <span>Subtotal</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </li>

          <li className="tp-order-info-list-total">
            <span>Total</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </li>
        </ul>
      </div>

      {error && (
        <div className="tp-checkout-error mb-3" style={{ color: "#c00", fontSize: "14px" }}>
          {error}
        </div>
      )}

      <div className="tp-checkout-btn-wrapper">
        <button
          type="submit"
          disabled={submitting}
          className="tp-checkout-btn w-100"
        >
          {submitting ? "Sending…" : "Ask for Quote"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderArea;
