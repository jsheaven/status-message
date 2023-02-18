import { jest } from '@jest/globals'
import { log, time, timeEnd, error, warn, info, trace, debug } from '../dist/index.esm'

describe('log', () => {
  it('can call log', () => {
    expect(log).toBeDefined()
  })
})

describe('log', () => {
  it('should call the console.info method with the formatted tag and arguments, severity: info', () => {
    console.info = jest.fn()
    const tag = 'test'
    const args = ['arg1', 'arg2']
    info(tag, ...args)
    expect(console.info).toHaveBeenCalled()
  })

  it('should call the console.log method with the formatted tag and arguments, severity: log', () => {
    console.log = jest.fn()
    const tag = 'test'
    const args = ['arg1', 'arg2']
    log(tag, ...args)
    expect(console.log).toHaveBeenCalled()
  })

  it('should call the console.error method with the formatted tag and arguments, severity: error', () => {
    console.error = jest.fn()
    const tag = 'test'
    const args = ['arg1', 'arg2']
    error(tag, ...args)
    expect(console.error).toHaveBeenCalled()
  })

  it('should call the console.warn method with the formatted tag and arguments, severity: warn', () => {
    console.warn = jest.fn()
    const tag = 'test'
    const args = ['arg1', 'arg2']
    warn(tag, ...args)
    expect(console.warn).toHaveBeenCalled()
  })

  it('should call the console.debug method with the formatted tag and arguments, severity: debug', () => {
    console.debug = jest.fn()
    const tag = 'test'
    const args = ['arg1', 'arg2']
    debug(tag, ...args)
    expect(console.debug).toHaveBeenCalled()
  })

  it('should call the console.trace method with the formatted tag and arguments, severity: trace', () => {
    console.trace = jest.fn()
    const tag = 'test'
    const args = ['arg1', 'arg2']
    trace(tag, ...args)
    expect(console.trace).toHaveBeenCalled()
  })
})

describe('logTime', () => {
  it('should call the console time method with the formatted tag and arguments', () => {
    console.time = jest.fn()
    const tag = 'test'
    time(tag)
    expect(console.time).toHaveBeenCalledTimes(1)
  })
})

describe('empty line', () => {
  it('can log an empty line', () => {
    log()
  })
})

describe('timEnd', () => {
  it('should call the console timeEnd method with the formatted tag and arguments', () => {
    console.timeEnd = jest.fn()
    const tag = 'test'
    timeEnd(tag)
    expect(console.timeEnd).toHaveBeenCalledTimes(1)
  })
})

describe('README use-case', () => {
  time('Log every feature')

  error('FATAL', 'You did not use this library yet')
  warn('DANGER', 'Other logging libraries do not support arbitrary args', { right: true }, process.version)
  log('SUCCESS', 'But this lib is only 361 bytes and has it all')
  info('NOTE', 'It even has 100% test coverage')
  debug('DEBUG', 'It is even tree-shakable')
  trace('DURATION', 'You can trace the runtime of a task easily too:')

  timeEnd('Log every feature')
})
