FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache openssl

RUN mkdir -p /app/certs && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /app/certs/server.key \
    -out /app/certs/server.cert \
    -subj "/CN=fargate.local/O=DevOps/OU=API"

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 443

CMD ["node", "src/server.js"]
