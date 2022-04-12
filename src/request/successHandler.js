import { notification } from 'antd';

import codeMessage from './codeMessage';

const successHandler = (response, options = { notifyOnSuccess: false, notifyOnFailed: true }) => {
  const { data } = response;
  if (data && data.errorCode === 0) {
    const message = response.data && data.message;
    const successText = message || codeMessage[response.status];

    if (options.notifyOnSuccess) {
      notification.config({
        duration: 5,
      });
      notification.success({
        message: `Đăng nhập thành công`,
        description: successText,
      });
    }
  } else {
    const message = response.data && data.message;
    const errorText = message || codeMessage[response.status];
    const { status } = response;
    if (options.notifyOnFailed) {
      notification.config({
        duration: 5,
      });
      notification.error({
        message: `Lỗi đăng nhập ${status}`,
        description: errorText,
      });
    }
  }
};

export default successHandler;
