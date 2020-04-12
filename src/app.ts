import { ResponseError } from 'umi';

export const request = {
    prefix: "/api",
    errorHandler: (error: ResponseError) => {
        // 集中处理错误
        console.log(error);
    }
};