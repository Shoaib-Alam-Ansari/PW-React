export const useDate = () => {
  const locale = "en"
  const today = new Date()
  const day = today.toLocaleDateString(locale,{weekday: "long"})
  const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: "long"})}`
  const hours = today.getHours()
  const wish = `Good ${(hours < 12 && "Morning") || (hours < 17 && 'Afternoon') || "Evening"}`
  return {wish, date}
}