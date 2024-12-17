#!/bin/bash

# Start the database container
echo "Starting PostgreSQL Docker Container..."
docker-compose up -d

#Wait for the database to be ready
# echo "Waiting for PostgresSQL initialize..."
# until docker exec postgres -U postgres;do
#     sleep 1
# done

#Run Prisma mitrations

echo "Running Prisma migrations..."
npx prisma migrate dev --name init -y
npx prisma generate

echo "Database setup complete!"


