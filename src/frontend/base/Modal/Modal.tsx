import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

import { Button } from "#base/Button/Button";

import css from "./Modal.module.css";

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
    <section className={css.Modal}>
      <div className={css.Inner} ref={modalRef}>
        <header className={css.Header}>
          <h2 className="h2">{title}</h2>

          <Button
            size="small"
            style="delete"
            onClick={() => setShow(false)}
            title="Close Modal"
          >
            &times;
          </Button>
        </header>
        <div className={css.Content}>{children}</div>
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
