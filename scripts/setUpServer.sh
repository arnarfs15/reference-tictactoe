#!/bin/bash
set -e
  sudo yum update -y #checks for updates on the instance
  sudo yum install -y docker # installs docker on the instance
  sudo service docker start #starts docker on the instance
  sudo yum install -y git-all
exit 0
