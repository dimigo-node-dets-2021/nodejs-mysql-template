export class HttpException extends Error {
  status;

  message;

  constructor(status = 500, message = '알 수 없는 서버 오류가 발생했습니다.') {
    super(message);
    this.status = status;
    this.message = message;
  }
}

const errorHandler = (error, req, res) => {
  if (process.env.NODE_ENV === 'develop') {
    console.error(error);
  }
  const { status = 500, message } = error;
  res.status(status).json({ message });
};

export default errorHandler;
