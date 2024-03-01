class APIResponse {
  constructor(message, statusCode, status = "success") {
    (this.message = message),
      (this.statusCode = statusCode),
      (this.status = status);
  }
}

export { APIResponse };
