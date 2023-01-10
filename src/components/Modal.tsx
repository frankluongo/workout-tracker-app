import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

export const Modal = ({ children, setShow, title }: ModalPropsInterface) => {
  const modalRef = useRef(null);
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    if (!modalRef.current || !mounted) return;
    const element: HTMLElement = modalRef.current;

    document.addEventListener("click", onClickOutside);
    document.addEventListener("keyup", onEscape);
    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keyup", onEscape);
    };

    function onClickOutside(ev: any): void | null {
      if (element.contains(ev.target)) return;
      setShow(false);
    }

    function onEscape(ev: any) {
      if (ev.key !== "Escape") return;
      setShow(false);
    }
  }, [mounted, setShow]);

  useEffect(() => setMount(true), []);

  return (
    <section className="modal">
      <div className="modal-inner" ref={modalRef}>
        <header className="modal-inner-header">
          <h2 className="h2">{title}</h2>

          <button onClick={() => setShow(false)} title="Close Modal">
            &times;
          </button>
        </header>
        <section className="modal-inner-content">{children}</section>
      </div>
    </section>
  );
};

interface ModalPropsInterface {
  children: JSX.Element;
  setShow: Function;
  title: string;
}

interface Element {
  removeEventListener(
    type: "keyup" | "keydown",
    listener: (event: KeyboardEvent) => any,
    options?: boolean | EventListenerOptions
  ): void;
  addEventListener(
    type: "keyup" | "keydown",
    listener: (event: KeyboardEvent) => any,
    options?: boolean | EventListenerOptions
  ): void;
}
