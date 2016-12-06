FROM node
WORKDIR /code
ENV NODE_PATH .
COPY . .
RUN npm install --silent
EXPOSE 8080
CMD ["./scripts/run.sh"]
