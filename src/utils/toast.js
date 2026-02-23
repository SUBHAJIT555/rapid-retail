import { ToastContainer as ReactToastContainer, toast } from 'react-toastify';


export const notifySuccess = (message) => {
  if (typeof window === "undefined") return;
  toast.success(message, {
    position: 'top-center',
    autoClose: 3000,
  });
};

export const notifyError = (message) => {
  if (typeof window === "undefined") return;
  toast.error(message, {
    position: 'top-center',
    autoClose: 3000,
  });
};

export const ToastContainer = () => {
  return (
    <ReactToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
    />
  );
};