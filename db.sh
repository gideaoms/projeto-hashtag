#!/bin/sh

psql --dbname=$DB_NAME --command='CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
