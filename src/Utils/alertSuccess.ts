import { toast } from "react-toastify";

export const alertSuccess = () => {
  toast.success("Busqueda con exito!!", {
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
