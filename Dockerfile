# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:stable-alpine

# 删除默认的 Nginx 配置
RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/

# 复制 Vue.js 项目的 dist 文件夹到 Nginx 的默认目录
COPY dist/ /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
