FROM php:8.2-fpm-alpine

# Copy File Config
ADD ./docker/php/www.conf /usr/local/etc/php-fpm.d/www.conf
ADD ./docker/php/memory-limit-php.ini /usr/local/etc/php/conf.d/memory-limit-php.ini
ADD ./docker/php/max-execution-time-php.ini /usr/local/etc/php/conf.d/max-execution-time-php.ini

# Create folder to run
RUN mkdir -p /var/www/html

# Work in the specific space
WORKDIR /var/www/html

# Install dependencies
RUN apk add --no-cache \
    freetype \
    libpng \
    libjpeg-turbo \
    freetype-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    unixodbc-dev

RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg

RUN NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
    docker-php-ext-install -j${NPROC} gd

RUN apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev

RUN docker-php-ext-install pdo pdo_mysql

# install and enable xdebug
RUN apk add --no-cache $PHPIZE_DEPS

