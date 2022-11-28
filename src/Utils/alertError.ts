import { toast } from "react-toastify";

export const alertError = (errMsgCityFilter: string) => {
  toast.error(errMsgCityFilter, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
