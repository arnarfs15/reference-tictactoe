FROM node
WORKDIR /code
ENV NODE_PATH .
COPY . .
RUN npm install --silent
EXPOSE 3000
CMD ["node","run.js"]
