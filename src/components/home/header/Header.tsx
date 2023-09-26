// Components
import Date from "@/components/header/Date"

/**
 * Header for the `Home` page.
 *
 * @returns `Header` component.
 */
export default function Header() {
  return (
    <header className="flex justify-between">
      <div>
        <span className="text-5xl block mb-2">안녕하세요!</span>
        <span className="text-2xl text-main-blue">Wingster </span>
        <span className="text-2xl">Wings & K-Food</span>
      </div>
      <Date />
    </header>
  )
}
