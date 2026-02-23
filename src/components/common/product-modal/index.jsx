import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import Image from "next/image";
// internal
import { handleModalClose } from "@/redux/features/productModalSlice";
import DetailsWrapper from "@/components/product-details/details-wrapper";
import { initialOrderQuantity } from "@/redux/features/cartSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "calc(100% - 300px)",
  },
};

const ProductModal = () => {
  const { productItem, isModalOpen } = useSelector(
    (state) => state.productModal
  );
  const { img, status } = productItem || {};
  const dispatch = useDispatch();
  
  // Reset order quantity when modal opens
  useEffect(() => {
    if (isModalOpen) {
      dispatch(initialOrderQuantity());
    }
  }, [isModalOpen, dispatch]);

  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => dispatch(handleModalClose())}
        style={customStyles}
        contentLabel="Product Modal"
      >
        <div className="tp-product-modal">
          <div className="tp-product-modal-content d-lg-flex">
            <button
              onClick={() => dispatch(handleModalClose())}
              type="button"
              className="tp-product-modal-close-btn"
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
            {/* product image - single image display */}
            <div className="tp-product-modal-image-wrapper">
              <div className="tp-product-details-nav-main-thumb p-relative">
                <Image
                  src={img || '/assets/img/product/product-1.jpg'}
                  alt="product img"
                  width={416}
                  height={480}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
                <div className="tp-product-badge">
                  {status === 'out-of-stock' && <span className="product-hot">out-stock</span>}
                </div>
              </div>
            </div>

            {/* product-details-wrapper start */}
            <DetailsWrapper
              productItem={productItem}
            />
            {/* product-details-wrapper end */}
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ProductModal;
