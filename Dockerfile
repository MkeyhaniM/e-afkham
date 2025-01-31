FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install --prod
RUN pnpm install

COPY . .
RUN pnpm build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["pnpm", "start"]