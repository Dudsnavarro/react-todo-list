import "./button-style.css";

export function Button({ children }) {
  return (
    <div className="button-body">
      <button className="button-submit" autoFocus>{children}</button>
    </div>
  );
}
