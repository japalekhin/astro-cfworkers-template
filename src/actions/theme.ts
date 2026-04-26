import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { THEME_COOKIE_NAME } from "@/shared/definitions/theme";

export const themeActions = {
  setTheme: defineAction({
    input: z.object({
      theme: z.string(),
    }),
    handler: async (input, { cookies }) => {
      const value = input.theme === "dark" ? "dark" : "light";

      cookies.set(THEME_COOKIE_NAME, value, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 365 * 10,
        path: "/",
        sameSite: "lax",
      });
    },
  }),
};
