# Stage 1
FROM node:alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . ./
RUN npm run build

# Stage 2
FROM nginx:stable-alpine
EXPOSE 8080
EXPOSE 80
COPY --from=builder /app/dist/ /usr/share/nginx/html/coins/
COPY container/etc/nginx/ /etc/nginx/
# CMD ["ln -s /etc/nginx/sites-available/coins.conf /etc/nginx/sites-enabled/coins.conf"]