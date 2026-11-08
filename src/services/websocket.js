// The HelpComputer backend. Set VITE_HELP_COMPUTER_WS (for example in
// .env.local) to point at a backend that isn't on this machine.
const url = import.meta.env.VITE_HELP_COMPUTER_WS || 'ws://localhost:8000/ws'

const websocket = new WebSocket(url)
export default websocket
