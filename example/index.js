import { log, error, warn, info, debug, trace, time, timeEnd, spinner, clearPrevLine } from '../dist/index.esm.js'

time('Log every feature')

error('FATAL', 'You did not use this library yet')
log()
warn('DANGER', 'Other logging libraries do not support arbitrary args', { right: true }, process.version)
log()
log('SUCCESS', 'But this lib is only 361 bytes and has it all')
log()
info('NOTE', 'It even has 100% test coverage')
log()
debug('DEBUG', 'It is even tree-shakable')
log()
trace('DURATION', 'You can trace the runtime of a task easily too:')

timeEnd('Log every feature')

const stop = spinner('Loading...')

await (async () => new Promise((resolve) => setTimeout(resolve, 2000)))()

stop()

let i = 1
const countTo100 = setInterval(() => {
  if (i > 1) clearPrevLine()
  info('COUNT', i)
  i++
  if (i > 100) clearInterval(countTo100)
}, 25)
