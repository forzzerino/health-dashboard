import { createPortal } from "react-dom";

function DiagramPortal({ children }: { children: React.ReactNode }) {
  if (typeof window === "undefined") return null;
  const mount = document.getElementById("diagram-root");
  return mount ? createPortal(children, mount) : null;
}

export default DiagramPortal;
