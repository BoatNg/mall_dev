FROM nginx:alpine

ADD nginx.conf /etc/nginx/
COPY sites/*.conf /etc/nginx/sites-available/

# fix a problem, change application source from dl-cdn.alpinelinux.org to aliyun source.
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories

RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash \
    && adduser -D -H -u 1000 -s /bin/bash www-data \
    && rm /etc/nginx/conf.d/default.conf 

CMD ["nginx"]

EXPOSE 80 443