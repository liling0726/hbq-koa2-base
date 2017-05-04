import * as path from 'path'
export default {
    mongodb: 'mongodb://127.0.0.1:27017/doraemon',
    apiPrefix: 'api',
    hostPrefix: '', //应用程序上线域名前缀
    staticPath: path.join(ROOT_PATH, 'public'),
    viewPath: path.join(ROOT_PATH, 'views'),
    uploadPath: path.join(ROOT_PATH, 'upload'),
    uploadStaticPrefix: 'attachment',
    port: 6666,
    secret: 'doraemon',
    projectName: 'doraemonPlatform',
    rootPath: process.cwd()
}