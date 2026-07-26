"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { ReactNode, useEffect } from "react";

function ThemeSync({ children }: { children: ReactNode }) {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    const value = resolvedTheme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", value);
  }, [systemTheme, theme]);

  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <ThemeSync>{children}</ThemeSync>
    </ThemeProvider>
  );
}
