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

# Install MS ODBC driver 17
RUN curl -O https://download.microsoft.com/download/8/6/8/868e5fc4-7bfe-494d-8f9d-115cbcdb52ae/msodbcsql18_18.1.2.1-1_amd64.apk
RUN curl -O https://download.microsoft.com/download/8/6/8/868e5fc4-7bfe-494d-8f9d-115cbcdb52ae/mssql-tools18_18.1.1.1-1_amd64.apk
RUN apk add --allow-untrusted msodbcsql18_18.1.2.1-1_amd64.apk
RUN apk add --allow-untrusted mssql-tools18_18.1.1.1-1_amd64.apk

# Install MS SQL PHP Drivers
RUN pecl install sqlsrv
RUN pecl install pdo_sqlsrv
RUN docker-php-ext-enable sqlsrv
RUN docker-php-ext-enable pdo_sqlsrv
