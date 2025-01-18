FROM node:22.9.0
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
