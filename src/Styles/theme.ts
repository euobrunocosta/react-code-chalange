enum Colors {
  ERROR = '#F56236',
  WARNING = '#FCE788',
  INFO = '#88FCA3',
  GRAY = '#A2A2A2',
  LIGHT = '#FFFFFF',
  DARK = '#000000'
}

enum BreakPoints {
  MEDIUM = '767px',
  LARGE = '992px'
}

type TTheme = {
  colors: typeof Colors
  breakPoints: typeof BreakPoints
}

export const theme: TTheme = {
  colors: Colors,
  breakPoints: BreakPoints
}
