class APIError extends Error {
  constructor(message, errorCode, status = "Failed") {
    super(message), (this.errorCode = errorCode), (this.status = status);
  }
}

export { APIError };
