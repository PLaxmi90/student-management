import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showNotification = (type, message, title, duration) => {
  toast[type](message, {
    position: "top-right",
    autoClose: duration,
    closeOnClick: true,
  });
};
