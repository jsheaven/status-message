import { log, error, warn, info, debug, trace, time, timeEnd } from '../dist/index.esm.js'

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
