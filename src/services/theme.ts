import type { AstroCookies } from "astro";
import { THEME_COOKIE_NAME } from "@/shared/definitions/theme";

export class ThemeService {
  cookies?: AstroCookies;

  constructor({ cookies }: { cookies?: AstroCookies }) {
    this.cookies = cookies;
  }

  getTheme(): "light" | "dark" {
    const value = this.cookies?.get(THEME_COOKIE_NAME)?.value;
    return value === "dark" ? "dark" : "light";
  }

  setTheme(theme: string): void {
    const value = theme === "dark" ? "dark" : "light";
    this.cookies?.set(THEME_COOKIE_NAME, value, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365 * 10,
      path: "/",
      sameSite: "lax",
    });
  }
}
