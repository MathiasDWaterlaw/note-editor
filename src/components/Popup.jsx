import "./Popup.css";

export default function Popup({ children, trigger }) {
  let className = "Popup";
  if (trigger) {
    className += " active";
  } else {
    className = "Popup";
  }
  return (
    <div className={className}>
      <div className='inner'>{children}</div>
    </div>
  );
}
