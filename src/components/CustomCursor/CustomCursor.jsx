import { useCustomCursor } from "../../hooks/useCustomCursor";
import "./CustomCursor.css";

export default function CustomCursor() {
  const { cursorRef, ringRef } = useCustomCursor();

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
