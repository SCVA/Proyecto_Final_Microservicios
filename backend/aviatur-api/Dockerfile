FROM node:current-alpine AS node-build
WORKDIR /
COPY . .
RUN npm i && npm run build

FROM node-build
COPY dist dist
COPY node_modules node_modules
CMD ["node", "dist/main"]