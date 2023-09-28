/**
 * Props for `BackgroundBlur`.
 */
type Props = {
  showCategoryPopup: boolean
}

/**
 * Blurs the background when `AddCategoryPopup` is visible.
 *
 * @param showCategoryPopup determines whether the `AddCategoryPopup`
 *                          component is visible
 * @returns `BackgroundBlur` component
 */
export default function BackgroundBlur({ showCategoryPopup }: Props) {
  return (
    <div
      className={`fixed inset-0 bg-opacity-20 ${
        showCategoryPopup
          ? "visible backdrop-blur-sm bg-black"
          : "invisible transition-all duration-500"
      }`}
    />
  )
}
