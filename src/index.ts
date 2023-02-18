import * as colors from 'kleur/colors'

export type Severity = 'error' | 'warn' | 'log' | 'info' | 'debug' | 'trace'

export interface StatusMessageOptions {
  severity: Severity
  message: string
}

export const boldWhiteText = (s: string) => colors.bold(colors.white(s))

export const wrapInBrackets = (tag: string) => boldWhiteText(`[${tag}]`)

/** formats the tag */
export const formatTag = (severity?: Severity, tag?: string) => {
  if (!severity && !tag) return ''

  switch (severity) {
    case 'error':
      return colors.bgRed(wrapInBrackets(tag))
    default:
    case 'info':
      return colors.black(colors.bgCyan(wrapInBrackets(tag)))
    case 'warn':
      return colors.black(colors.bgYellow(wrapInBrackets(tag)))
    case 'log':
      return colors.black(colors.bgGreen(wrapInBrackets(tag)))
    case 'debug':
      return colors.bgMagenta(wrapInBrackets(tag))
    case 'trace':
      return colors.white(colors.bgBlack(wrapInBrackets(tag)))
  }
}

/** logs a status to the console, formatted */
export const log = (severity?: Severity, tag?: string, ...args: Array<any>) =>
  (console[severity || 'info'] as Function)(formatTag(severity, tag), ...args)

export const formatTimeLabel = (label: string) => colors.bgBlack(colors.white(`⏰ ${label}`))

/** logs when logTimeEnd(...) will be called with the same arguments */
export const logTime = (label: string) => console.time(formatTimeLabel(label))

/** prints the log with the duration since logTime(...) was called with the same arguments */
export const logTimeEnd = (label: string) => console.timeEnd(formatTimeLabel(label))
