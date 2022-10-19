# syntax=docker/dockerfile:1

FROM nginx

RUN rm /usr/share/nginx/html/index.html

COPY ./webpage/ /usr/share/nginx/html/



