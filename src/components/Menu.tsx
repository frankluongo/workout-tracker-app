import React from "react";
import { useAppMachine } from "../hooks/useAppMachine";
import { APP_STATE } from "../machines/appMachine/appMachineStates";

const elements = [
  { type: "TO_ROUTINES", label: "Routines", slug: APP_STATE.routines },
  { type: "TO_EXERCISES", label: "Exercises", slug: APP_STATE.exercises },
  { type: "TO_DEFAULT", label: "Home", slug: APP_STATE.default },
  { type: "TO_STATS", label: "Stats", slug: APP_STATE.stats },
  { type: "TO_SETTINGS", label: "Settings", slug: APP_STATE.settings },
];

export const Menu = () => {
  const { currentState, send } = useAppMachine();
  console.log(currentState);
  return (
    <header className="header">
      <nav className="menu">
        {elements.map((el: ElementInterface) => (
          <MenuLink
            key={el.type}
            {...el}
            send={send}
            active={currentState === el.slug}
          />
        ))}
      </nav>
    </header>
  );
};

function MenuLink({ active, label, send, type }: MenuLinkInterface) {
  return (
    <button
      aria-current={active}
      className="menu-link"
      onClick={changePage}
      type="button"
    >
      {label}
    </button>
  );

  function changePage() {
    send({ type });
  }
}

interface MenuLinkInterface {
  active: boolean;
  label: string;
  send: Function;
  type: string;
}

interface ElementInterface {
  type: string;
  label: string;
  slug: string;
}
