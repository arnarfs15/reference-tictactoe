FROM node
WORKDIR /code
ENV NODE_PATH .

#copies the Dockerfile to the build folder
COPY . .

#runs npm install without
RUN npm install --silent

#exposes port 80 to be used
EXPOSE 80

#Executes the run script which migrates the db and runs run.js
CMD ["./run.sh"]
