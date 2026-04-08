import { Children, useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconTrash } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("deveriamos mostrar", isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);


  //Valida fechamento da dialog pelo Esc
  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.addEventListener('close', onClose)
    return () => {
      dialog?.removeEventListener('close', onClose)
    }
  }, [onClose])

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <dialog ref={dialogRef} className="dialog">
      <div className="btn-close-wrapper">
        <button autoFocus onClick={onClose} className="btn-close">
          <IconTrash />
        </button>
      </div>
      <div className="body">{children}</div>
    </dialog>
  );
}
