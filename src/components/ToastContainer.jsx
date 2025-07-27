import { useToastStore } from "../store/toastStore";
import { useEffect } from "react";

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), 4000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-2 rounded shadow-lg text-white ${
            toast.type === "success"
              ? "bg-green-600"
              : toast.type === "error"
              ? "bg-red-600"
              : "bg-gray-700"
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
