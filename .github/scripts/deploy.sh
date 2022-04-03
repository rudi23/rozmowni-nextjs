#!/bin/bash

tar --exclude="./.idea" --exclude="./.git" --exclude="./.github" -czf app.tar.gz * .??*

rsync -av ./app.tar.gz ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }}:/home/${{ secrets.SSH_USER }}/rails/test
