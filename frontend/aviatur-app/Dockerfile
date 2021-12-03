#stage 1
FROM node:14.18.0-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/aviatur-app /usr/share/nginx/html