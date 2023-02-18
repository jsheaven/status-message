import * as colors from 'kleur/colors'

export const formatTag = (tag: string) => colors.bold(colors.white(` ${tag} `))

export const error = (tag?: string, ...args: Array<any>) =>
  console.error(colors.white(colors.bgRed(formatTag(tag))), ...args)
export const info = (tag?: string, ...args: Array<any>) =>
  console.info(colors.black(colors.bgCyan(formatTag(tag))), ...args)
export const warn = (tag?: string, ...args: Array<any>) =>
  console.warn(colors.bgBlack(colors.bgYellow(formatTag(tag))), ...args)
export const log = (tag?: string, ...args: Array<any>) =>
  console.log(!tag ? '' : colors.black(colors.bgGreen(formatTag(tag))), ...args)
export const debug = (tag?: string, ...args: Array<any>) =>
  console.debug(colors.white(colors.bgMagenta(formatTag(tag))), ...args)
export const trace = (tag?: string, ...args: Array<any>) =>
  console.trace(colors.white(colors.bgBlack(formatTag(tag))), ...args)

export const formatTimeLabel = (label: string) => colors.bgBlack(colors.white(` ⏰ ${label} `))

/** logs when timeEnd(...) will be called with the same arguments */
export const time = (label: string) => console.time(formatTimeLabel(label))

/** prints the log with the duration since time(...) was called with the same arguments */
export const timeEnd = (label: string) => console.timeEnd(formatTimeLabel(label))

export const clearPrevLine = () => {
  process.stdout.moveCursor(0, -1)
  process.stdout.clearLine(1)
  process.stdout.cursorTo(0)
}

/** shows a spinning loading animation and returns a function to stop that again  */
export const spinner = (label: string) => {
  let i = 0
  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
  const spinnerInterval = setInterval(() => {
    clearPrevLine()
    process.stdout.write(`${colors.bgCyan(` ${colors.white(colors.bold(spinner[i]))} `)} ${colors.white(label)}\n`)
    i = (i + 1) % spinner.length
  }, 100)

  return () => {
    clearInterval(spinnerInterval)
    clearPrevLine()
  }
}
