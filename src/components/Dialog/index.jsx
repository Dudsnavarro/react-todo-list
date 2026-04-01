import { useEffect, useRef } from "react";

export function Dialog({ isOpen, onClose }) {

  const dialogRef = useRef (null)

  useEffect(() => {
    console.log('deveriamos mostrar', isOpen)
    if (isOpen) {
      openDialog()
    } else {
      closeDialog()
    }
  }, [isOpen])

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>Close</button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
  );
}
