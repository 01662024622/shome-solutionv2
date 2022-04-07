import React, { useEffect } from 'react';
import { Button, Result } from 'antd';
import history from '@/utils/history';
const NotFound = () => {
  useEffect(() => {
    history.replace('/notfound');
  }, []);
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi sự bất tiện này hãy liên hệ kỹ thuật để được hướng dẫn giải quyết."
        extra={
          <Button href="/" type="primary">
            Quay lại trang chủ
          </Button>
        }
      />
    </>
  );
};
export default NotFound;
