import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Model = forwardRef(function Model({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <div>
      <dialog ref={dialog}>{children}</dialog>
    </div>,

    document.getElementById("modal-root")
  );
});
export default Model;
