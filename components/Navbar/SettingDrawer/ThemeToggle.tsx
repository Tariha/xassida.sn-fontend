import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="my-4 space-y-3">
      <h3 className="text-md font-bold">Themes</h3>
      <div className="shadow-xs flex w-full items-center justify-center space-x-2 rounded-full bg-gray-300 px-2 py-1 text-sm text-slate-900 dark:bg-slate-700 dark:text-white">
        <label htmlFor="dark" className="cursor-pointer">
          <input
            onChange={() => setTheme("dark")}
            type="radio"
            id="dark"
            name="theme"
            value="dark"
            className="peer hidden appearance-none"
          />
          <div
            className={`flex items-center space-x-2 rounded-full p-2 px-4 ${
              theme == "dark" ? "bg-white dark:bg-black" : ""
            }`}
          >
            <Moon className="w-4" />
            <span>Dark</span>
          </div>
        </label>
        <label htmlFor="sys" className="m-0 cursor-pointer p-0">
          <input
            onChange={() => setTheme("system")}
            type="radio"
            id="sys"
            name="theme"
            value="system"
            className="peer hidden appearance-none"
          />
          <div
            className={`flex items-center space-x-2 rounded-full p-2 px-4 ${
              theme == "system" ? "bg-white dark:bg-black" : ""
            }`}
          >
            <Laptop className="w-4" />
            <span>System</span>
          </div>
        </label>
        <label htmlFor="light" className="m-0 cursor-pointer p-0">
          <input
            onChange={() => setTheme("light")}
            type="radio"
            id="light"
            name="theme"
            value="light"
            className="peer hidden appearance-none"
          />
          <div
            className={`flex items-center space-x-2 rounded-full p-2 px-4 ${
              theme == "light" ? "bg-white dark:bg-black" : ""
            }`}
          >
            <Sun className="w-4" />
            <span>Light</span>
          </div>
        </label>
      </div>
    </div>
  )
}

export default ThemeToggle
