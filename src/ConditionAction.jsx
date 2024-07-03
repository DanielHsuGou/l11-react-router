export default function ConditionAction({ children }) {
  return (
    <div style={{ position: "fixed", right: "0", bottom: "0", color: "red" }}>
      {children}
    </div>
  );
}
