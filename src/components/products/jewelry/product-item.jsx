import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// internal
import { AddCart, Cart, QuickView, Wishlist } from "@/svg";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";

const ProductItem = ({ product }) => {
  const { _id, img, title, price, discountedPrice, tags, status } = product || {};
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();
  
  // Determine selling price and original price
  // discountedPrice is the selling price (what customer pays)
  // price is the original price (shown with strikethrough if discounted)
  const sellingPrice = discountedPrice && discountedPrice < price ? discountedPrice : price;
  const originalPrice = discountedPrice && discountedPrice < price ? price : null;

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };

  // handle wishlist product
  const handleWishlistProduct = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  // handle open modal
  const handleOpenModal = () => {
    dispatch(handleProductModal(product));
  };

  return (
    <div className="tp-product-item-4 p-relative mb-40">
      <div className="tp-product-thumb-4 p-relative fix">
        <div onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
          <Image src={img} alt="product img" width={284} height={352} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="tp-product-badge">
          {status === 'out-of-stock' && <span className="product-hot">out-stock</span>}
        </div>
        <div className="tp-product-action-3 tp-product-action-4 has-shadow tp-product-action-blackStyle tp-product-action-brownStyle">
          <div className="tp-product-action-item-3 d-flex flex-column">
            {isAddedToCart ? (
              <Link
                href="/cart"
                className={`tp-product-action-btn-3 ${isAddedToCart ? 'active' : ''} tp-product-add-cart-btn text-center`}
              >
                <Cart />
                <span className="tp-product-tooltip">View Cart</span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => handleAddProduct(product)}
                className={`tp-product-action-btn-3 ${isAddedToCart ? 'active' : ''} tp-product-add-cart-btn`}
                disabled={status === 'out-of-stock'}
              >
                <Cart />
                <span className="tp-product-tooltip">Add to Cart</span>
              </button>
            )}
            <button
              type="button"
              className="tp-product-action-btn-3 tp-product-quick-view-btn"
              onClick={() => dispatch(handleProductModal(product))}
            >
              <QuickView />
              <span className="tp-product-tooltip">Quick View</span>
            </button>
            <button
              type="button"
              onClick={() => handleWishlistProduct(product)}
              className={`tp-product-action-btn-3 ${isAddedToWishlist ? 'active' : ''} tp-product-add-to-wishlist-btn`}
              disabled={status === 'out-of-stock'}
            >
              <Wishlist />
              <span className="tp-product-tooltip">Add To Wishlist</span>
            </button>
          </div>
        </div>
      </div>
      <div className="tp-product-content-4">
        <h3 className="tp-product-title-4">
          <a onClick={handleOpenModal} style={{ cursor: 'pointer' }}>{title}</a>
        </h3>
        <div className="tp-product-info-4">
          <p>{tags[0]}</p>
        </div>

        <div className="tp-product-price-inner-4">
          <div className="tp-product-price-wrapper-4">
            {originalPrice ? (
              <>
                <span className="tp-product-price-4">₹{sellingPrice.toFixed(2)}</span>
                <span className="tp-product-price-4 old-price" style={{ textDecoration: 'line-through', opacity: 0.6, marginLeft: '8px' }}>
                  ₹{originalPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="tp-product-price-4">₹{sellingPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="tp-product-price-add-to-cart">
            {isAddedToCart ? <Link href="/cart" className="tp-product-add-to-cart-4">
              <AddCart /> View Cart
            </Link> : <button disabled={status === 'out-of-stock'} onClick={()=> handleAddProduct(product)} className="tp-product-add-to-cart-4 border px-4 rounded-pill bg-primary text-white ">
              <AddCart /> Add to Cart
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
