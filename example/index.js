import { log, logTime, logTimeEnd } from '../dist/index.esm.js'

logTime('trace', 'Log every feature')

log('error', 'FATAL', 'You did not use this library yet')
log()
log('warn', 'DANGER', 'Other logging libraries do not support arbitrary args', { right: true }, process.version)
log()
log('log', 'SUCCESS', 'But this lib is only 361 bytes and has it all')
log()
log('info', 'NOTE', 'It even has 100% test coverage')
log()
log('debug', 'DEBUG', 'It is even tree-shakable')
log()
log('trace', 'DURATION', 'You can trace the runtime of a task easily too:')

logTimeEnd('trace', 'Log every feature')
