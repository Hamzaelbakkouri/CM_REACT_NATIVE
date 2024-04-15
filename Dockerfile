FROM node:20-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm i -yes --verbose
COPY . .
# expo ports
EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
CMD ["npm","run", "start"]