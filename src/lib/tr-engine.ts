enum State {
  Done,
  Idle,
  Running
}

interface TREngine {
  finish: (handler) => void
  start: (handler) => void
  stop: (handler) => void
}

const currentWindow = window
let listener
let timer

export default function init(handler: (event) => any): TREngine {
  return {
    finish: finish(handler),
    start: start(handler),
    stop: stop(handler)
  }
}

function start(handler): () => void {
  return function(): void {
    currentWindow.addEventListener('keyup', (event) => {
      handler({ key: event.key, eventTime: Date.now() })
    })
  }
}

function stop(handler): () => void {
  return function(): void {
    currentWindow.removeEventListener('keyup', handler)
  }
}

function finish(handler): () => void {
  return function(): void {
    currentWindow.removeEventListener('keyup', handler)
  }
}