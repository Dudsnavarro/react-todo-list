import "./button-style.css";

export function Button({ children, ...rest }) {
  return (
    <div className="button-body">
      <button className="button-submit" {...rest}>
        {children}
      </button>
    </div>
  );
}
