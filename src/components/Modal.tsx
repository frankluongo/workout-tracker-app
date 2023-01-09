import React, { SyntheticEvent, useEffect, useRef, useState } from "react";

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

    function onClickOutside(e: any) {
      if (element.contains(e.target)) return;
      setShow(false);
    }

    function onEscape(e: React.KeyboardEvent) {
      if (e.key !== "Escape") return;
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
  showModal: boolean;
  setShow: Function;
  title: string;
}
