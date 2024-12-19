import React, { useRef, useEffect } from 'react';
import { Toast } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomToast = ({ message, type }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    const toastElement = toastRef.current;
    const bsToast = new Toast(toastElement, { autohide: true, delay: 3000 });

    if (message) {
      bsToast.show();
    }

    return () => {
      if (toastElement) {
        bsToast.dispose();
      }
    };
  }, [message]);

  return (
    <div
      ref={toastRef}
      className={`toast align-items-center text-bg-${type} border-0`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default CustomToast;
