FROM tutum/nginx
RUN rm /etc/nginx/sites-enabled/default
ADD sites-enabled/app /etc/nginx/sites-enabled
COPY config/nginx.conf /etc/nginx
