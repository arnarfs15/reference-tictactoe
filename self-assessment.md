## Scripts

Outline what script files you created and the purpose of each file. Each file should be commented. This could be

- Docker build
  - Location: ./scripts/build.sh
  - Purpose: It's purpose is to create a new working build of the project and uses several scripts created in package.json
- Docker compose
  - Location: docker-compose.yaml
  - Purpose: It's purpose is to set up the environment for the production server and 

- AWS Provisioning 
  - Not implemented, but had steps in setting up a AWS server in a script call setUpServer.sh

- Other scripts
  - loginAWS.sh
    - Purpose: logs me into the AWS server. Won't work for anyone but me since the pem key is not stored on github
  - loginQStack.sh
    - Purpose: logs me into the QStack server
  - package.sh
    - Purpose: Packages the application (builds, writes some files, pushes to dockerhub)
  - removeContainers.sh
    - Purpose: deletes all docker containers
  - removeImages.sh
    - Purpose: deletes all docker images
  - run.sh
    - Purpose: migrates the database and runs the script start in package.json
  - runClientStart.sh
    - Purpose: runs up the client development environment
  - runRootStart.sh
    - Purpose: runs up the root development environment 
  - transferCompose.sh
    - Purpose: transfers the docker-compose file to the AWS server
  - remote/
    - deployJenkins.sh
      - Purpose: The script that the deploy stage on Jenkins runs
    - dockerCompose.sh
      - Purpose: Used by the deploy stage in Jenkins to set up the website
    - jenkinsAcceptance.sh
      - Purpose: The script that the acceptance stage on Jenkins runs
    - jenkinsBuild.sh
      - Purpose: The script that the Commit stage on Jenkins runs
    - jenkinsLoadTest.sh
      - Purpose: The script that the load test on Jenkins run
    - npm-install.sh
      - Purpose: Installs npm and removes it if it existed already
  


## Testing & logic

Outline what tests you created.

- UnitTests, server logic TDD (Git commit log)


  - create game command
    - ✔ should emit game created event

  - join game command
    - ✔ should emit game joined event...
    - ✔ should emit FullGameJoinAttempted event when game full...

  - Make move command
    - ✔ should emit player X made a move
    - ✔ should emit player O made a move

  - Win game command
    - ✔ Should emit player X won when X wins horizontally
    - ✔ should emit player O won when O wins Vertically
    - ✔ should emit player X won when X wins from top-left to bottom-right
    - ✔ should emit player O won when O wins from bottom-left to bottom-right
    - ✔ should emit player X won when X wins on last move

  - Draw game command
    - ✔ should emit Draw on last X move

  - Illegal move command
    - ✔ should emit "Illegal move" when player O makes a move at a field with a move
    - ✔ should emit "Not your turn" when player O makes a move at other turn
    - ✔ should emit "Illegal move" when player X makes a move outside the grid


- API Acceptance test - fluent API
  - User chat API
    - ✔ should get user session information on connect
    - ✔ should receive chat message back after sending chat command

  - Tictactoe API
    - ✔ should be able to play game to end


- Load test loop
  - User chat load test
    - ✔ should connect and send 200  user messages within 10000ms

  - TicTacToe game load test
    - ✔ should play 100 games within 30000ms


- UI TDD
  - Tic Cell
    - ✔ should render without error
    - ✔ should ignore move with matching gameId but not coordinates
    - ✔ should ignore move with matching coordinates, but not matching gameId
    - ✔ should issue PlaceMove command with gameId, mySide and coordinates when clicked

- Is the game playable?
  - The game is playable, however the UI was not changed at all



## Data migration

Did you create a data migration.

- Migration up and down
  - added a new Migrations file that adds column "aggregate_id" to the database on up
  - no down was added since the column is removed on down for the event_log table



## Jenkins

Do you have the following Jobs and what happens in each Job:

- Commit Stage
  - ✔ It builds the Application and runs unit tests and publishes them, it then copies the docker-compose file end .env file to the aws server for the deploy stage to use 

- Acceptance Stage
  - runs the API tests
- Capacity Stage
  - runs the load tests
- Other


Did you use any of the following features in Jenkins?

- Schedule or commit hooks
  - ✔ added a hook to github
- Pipeline
  - ✔
- Jenkins file

- Test reports
  - Commit stage publishes xml test reports
- Other



## Monitoring

Did you do any monitoring?

- URL to monitoring tool. Must be open or include username and pass.



## Other

Anything else you did to improve you deployment pipeline of the project itself?

