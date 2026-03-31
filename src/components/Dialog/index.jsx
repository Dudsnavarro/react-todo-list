import { useRef } from "react";

export function Dialog() {

  const dialogRef = useRef (null)

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <React.Fragment>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={closeDialog}>Close</button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button onClick={openDialog}>Show the dialog</button>
    </React.Fragment>
  );
}
