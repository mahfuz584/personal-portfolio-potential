"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering (to avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`${className}`}
    >
      {theme === "dark" ? (
        <MdOutlineLightMode size={22} color="#FD6F00" />
      ) : (
        <MdDarkMode size={22} color="#FD6F00" />
      )}
    </button>
  );
};

export default ThemeToggle;
