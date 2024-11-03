# use PHP 8.3
FROM php:8.3-fpm

# Install common php extension dependencies
RUN apt-get update && apt-get install -y \
    libfreetype-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    zlib1g-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install zip

RUN apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_pgsql pgsql
        
RUN pecl install redis && docker-php-ext-enable redis

# Set the working directory
COPY . /var/www
WORKDIR /var/www

RUN usermod -u 1000 www-data && groupmod -g 1000 www-data 
RUN chown -R www-data:www-data /var/www
USER www-data

RUN chmod -R 775 /var/www/storage

# install composer
COPY --from=composer:2.6.5 /usr/bin/composer /usr/local/bin/composer

# copy composer.json to workdir & install dependencies
COPY composer.json ./
RUN composer install

# Set the default command to run php-fpm
CMD ["php-fpm"]