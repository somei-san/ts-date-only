export enum DayOfTheWeek {
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
  Sun = "Sun",
}

const convertFromDay = (source: number): DayOfTheWeek => {
  switch (source) {
    case 0:
      return DayOfTheWeek.Sun
    case 1:
      return DayOfTheWeek.Mon
    case 2:
      return DayOfTheWeek.Tue
    case 3:
      return DayOfTheWeek.Wed
    case 4:
      return DayOfTheWeek.Thu
    case 5:
      return DayOfTheWeek.Fri
    case 6:
      return DayOfTheWeek.Sat
    default:
      throw new Error(`sourceは0~1のいずれかでないといけません. source:${source}`)
  }
}

export const fromDate = (source: Date): DayOfTheWeek => {
  return convertFromDay(source.getDay())
}
