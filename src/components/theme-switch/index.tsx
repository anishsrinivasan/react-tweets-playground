"use client";

import { Switch } from "@/components/ui/switch";

const ThemeSwitch = () => {
  const switchTheme = (checked: boolean) => {
    const mainInstance = document.querySelector("main");
    const currentTheme = mainInstance?.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    mainInstance?.setAttribute("data-theme", newTheme);
  };

  return <Switch defaultChecked onCheckedChange={switchTheme} />;
};

export default ThemeSwitch;
