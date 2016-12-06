FROM node
WORKDIR /code
ENV NODE_PATH .
COPY . .
RUN npm install --silent
EXPOSE 80
CMD ["./run.sh"]
