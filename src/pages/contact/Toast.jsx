/* eslint-disable react-refresh/only-export-components */
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}
export const showToast = (message, type) => {
    toast[type](message, {
      className: 'bg-green-500 text-white p-3 rounded-md', // Tailwind CSS classes for success
      bodyClassName: 'text-sm',
      progressClassName: 'bg-green-200',
    });
  };
  
 

export default Toast
