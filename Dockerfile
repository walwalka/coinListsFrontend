# Stage 1
FROM node:alpine
EXPOSE 8080
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "dev"]
