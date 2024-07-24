import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Model({ children }, ref) {
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
      <dialog
        ref={dialog}
        className="backdrop:bg-slate-900/90 p-4 rounded-md shadow-md"
      >
        {children}
        <form method="dialog">
          <button
            type="button"
            className="btn p-2 bg-green-900 text-gray-200 rounded-md end-52"
          >
            Close
          </button>
        </form>
      </dialog>
    </div>,

    document.getElementById("modal-root")
  );
});
export default Modal;
