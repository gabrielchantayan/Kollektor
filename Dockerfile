FROM --platform=linux/amd64 node:21 as builder

ENV GROUP_ID=1000 \
    USER_ID=1000

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN mkdir ./public \
    && cd ./client \
    && npm install --production \
    && npm run build \
    && cd .. \
    && mv ./client/build/* ./public \
    && rm -rf ./client

FROM --platform=linux/amd64 node:21-alpine

COPY --from=builder /app /app

WORKDIR /app

EXPOSE 3080

ENV NODE_ENV=production
# ENV PORT=3080
ENV ADMIN_PASSWORD="password"

CMD ["npm", "run", "start"]