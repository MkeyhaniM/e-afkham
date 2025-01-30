FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
COPY . .
EXPOSE 3000
CMD pnpm dev