import * as colors from 'kleur/colors'

export const boldWhiteText = (s: string) => colors.bold(colors.white(s))

export const wrapInBrackets = (tag: string) => boldWhiteText(`[${tag}]`)

export const error = (tag?: string, ...args: Array<any>) =>
  console.error(colors.white(colors.bgRed(wrapInBrackets(tag))), ...args)
export const info = (tag?: string, ...args: Array<any>) =>
  console.info(colors.black(colors.bgCyan(wrapInBrackets(tag))), ...args)
export const warn = (tag?: string, ...args: Array<any>) =>
  console.warn(colors.bgBlack(colors.bgYellow(wrapInBrackets(tag))), ...args)
export const log = (tag?: string, ...args: Array<any>) =>
  console.log(!tag ? '' : colors.black(colors.bgGreen(wrapInBrackets(tag))), ...args)
export const debug = (tag?: string, ...args: Array<any>) =>
  console.debug(colors.white(colors.bgMagenta(wrapInBrackets(tag))), ...args)
export const trace = (tag?: string, ...args: Array<any>) =>
  console.trace(colors.white(colors.bgBlack(wrapInBrackets(tag))), ...args)

export const formatTimeLabel = (label: string) => colors.bgBlack(colors.white(`⏰ ${label}`))

/** logs when timeEnd(...) will be called with the same arguments */
export const time = (label: string) => console.time(formatTimeLabel(label))

/** prints the log with the duration since time(...) was called with the same arguments */
export const timeEnd = (label: string) => console.timeEnd(formatTimeLabel(label))
