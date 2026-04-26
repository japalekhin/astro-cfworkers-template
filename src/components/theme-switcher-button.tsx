"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import { actions } from "astro:actions";
import AwesomeReactIcon from "@/components/icons/awesome-react-icon";

export default function ThemeSwitcherButton({
  initialTheme,
}: {
  initialTheme: "light" | "dark";
}) {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);

  const rotation = useMemo(() => {
    if (theme === "light") {
      return "rotate-0";
    }
    return "rotate-180";
  }, [theme]);

  function onClick() {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);

    actions.theme.setTheme({ theme: newTheme });
  }

  return (
    <button
      type="button"
      className="btn btn-square btn-ghost relative overflow-hidden"
      onClick={onClick}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0">
        <div
          className={`absolute top-full left-1/2 h-[200%] w-[200%] -translate-1/2 transition-all ${rotation}`}
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[137.5%]">
              <AwesomeReactIcon icon={faSun} transform={{ size: 20 }} />
            </div>
          </div>
          <div className="absolute inset-0 rotate-180">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[137.5%]">
              <AwesomeReactIcon icon={faMoon} transform={{ size: 20 }} />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
