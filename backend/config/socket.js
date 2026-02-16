let io

module.exports = {
  init: (serverIO) => {
    io = serverIO
    return io
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized")
    }
    return io
  }
}
