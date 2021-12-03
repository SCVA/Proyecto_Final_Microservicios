FROM node:14.18.0-alpine AS node-build
WORKDIR /
COPY . .
RUN ls
RUN npm i && npm run build


FROM node-build
COPY --from=node-build dist dist
COPY --from=node-build node_modules node_modules
CMD ["node", "dist/main"]
