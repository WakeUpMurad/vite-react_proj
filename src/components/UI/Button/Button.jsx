import cl from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
 
  return (
    <button className={isActive ? `${cl.button} ${cl.active}` : cl.button} {...props}>
      {children}
    </button>
  );
}
