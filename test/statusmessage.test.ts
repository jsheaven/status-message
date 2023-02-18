import { jest } from '@jest/globals'
import * as colors from 'kleur/colors'
import { Severity, boldWhiteText, wrapInBrackets, formatTag, log, logTime, logTimeEnd } from '../dist/index.esm'

describe('statusmessage', () => {
  it('can call statusmessage', () => {
    expect(log).toBeDefined()
  })
})

describe('boldWhiteText', () => {
  it('should return the input string wrapped in bold and white colors', () => {
    expect(boldWhiteText('test')).toEqual(colors.bold(colors.white('test')))
  })
})

describe('wrapInBrackets', () => {
  it('should wrap the input string in bold and white brackets', () => {
    expect(wrapInBrackets('test')).toEqual(boldWhiteText(`[${'test'}]`))
  })
})

describe('formatTag', () => {
  it('should return the tag wrapped in bold and white brackets with a red background for the error severity', () => {
    expect(formatTag('error', 'test')).toEqual(colors.bgRed(wrapInBrackets('test')))
  })
})

describe('log', () => {
  it('should call the console.info method with the formatted tag and arguments, severity: info', () => {
    console.info = jest.fn()
    const severity: Severity = 'info'
    const tag = 'test'
    const args = ['arg1', 'arg2']
    log(severity, tag, ...args)
    expect(console.info).toHaveBeenCalledWith(formatTag(severity, tag), ...args)
  })

  it('should call the console.log method with the formatted tag and arguments, severity: log', () => {
    console.log = jest.fn()
    const severity: Severity = 'log'
    const tag = 'test'
    const args = ['arg1', 'arg2']
    log(severity, tag, ...args)
    expect(console.log).toHaveBeenCalledWith(formatTag(severity, tag), ...args)
  })

  it('should call the console.error method with the formatted tag and arguments, severity: error', () => {
    console.error = jest.fn()
    const severity: Severity = 'error'
    const tag = 'test'
    const args = ['arg1', 'arg2']
    log(severity, tag, ...args)
    expect(console.error).toHaveBeenCalledWith(formatTag(severity, tag), ...args)
  })

  it('should call the console.warn method with the formatted tag and arguments, severity: warn', () => {
    console.warn = jest.fn()
    const severity: Severity = 'warn'
    const tag = 'test'
    const args = ['arg1', 'arg2']
    log(severity, tag, ...args)
    expect(console.warn).toHaveBeenCalledWith(formatTag(severity, tag), ...args)
  })

  it('should call the console.debug method with the formatted tag and arguments, severity: debug', () => {
    console.debug = jest.fn()
    const severity: Severity = 'debug'
    const tag = 'test'
    const args = ['arg1', 'arg2']
    log(severity, tag, ...args)
    expect(console.debug).toHaveBeenCalledWith(formatTag(severity, tag), ...args)
  })

  it('should call the console.trace method with the formatted tag and arguments, severity: trace', () => {
    console.trace = jest.fn()
    const severity: Severity = 'trace'
    const tag = 'test'
    const args = ['arg1', 'arg2']
    log(severity, tag, ...args)
    expect(console.trace).toHaveBeenCalledWith(formatTag(severity, tag), ...args)
  })
})

describe('logTime', () => {
  it('should call the console time method with the formatted tag and arguments', () => {
    console.time = jest.fn()
    const tag = 'test'
    logTime(tag)
    expect(console.time).toHaveBeenCalledTimes(1)
  })
})

describe('formatTag', () => {
  it('can format without severity', () => {
    formatTag(undefined, 'foo')
  })
})

describe('empty line', () => {
  it('can log an empty line', () => {
    log()
  })
})

describe('logTimeEnd', () => {
  it('should call the console timeEnd method with the formatted tag and arguments', () => {
    console.timeEnd = jest.fn()
    const tag = 'test'
    logTimeEnd(tag)
    expect(console.timeEnd).toHaveBeenCalledTimes(1)
  })
})

describe('README use-case', () => {
  logTime('Log every feature')

  log('error', 'FATAL', 'You did not use this library yet')
  log('warn', 'DANGER', 'Other logging libraries do not support arbitrary args', { right: true }, process.version)
  log('log', 'SUCCESS', 'But this lib is only 361 bytes and has it all')
  log('info', 'NOTE', 'It even has 100% test coverage')
  log('debug', 'DEBUG', 'It is even tree-shakable')
  log('trace', 'DURATION', 'You can trace the runtime of a task easily too:')

  logTimeEnd('Log every feature')
})
