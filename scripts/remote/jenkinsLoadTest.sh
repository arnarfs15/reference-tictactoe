#!/bin/bash

./scripts/remote/npm-install.sh       #install npm for the load stage
npm run loadtest                      #runs the test
ssh -o StrictHostKeyChecking=no -i "../arnarfs15.pem" ec2-user@52.208.158.45 "./dockerCompose.sh"   #temporary if there is time a provisioning script will
                                                                                                    #run a new instance for the load and api tests
