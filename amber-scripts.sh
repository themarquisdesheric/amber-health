#!/bin/bash

# prevent using unset variables
set -u

REPO_DIRECTORY="$HOME/Desktop/Code/amber-health"
IMAGE_DIRECTORY="$REPO_DIRECTORY/static/img"
ARTICLE_DIRECTORY="$REPO_DIRECTORY/src/pages/articles"

GREEN_COLOR="\n\033[32m"
RED_COLOR="\n\033[31m"
BLUE_COLOR="\n\033[36m"
WHITE_COLOR="\n\033[00m"

# aliases

alias amberHealth="cd $REPO_DIRECTORY"
alias images="open $IMAGE_DIRECTORY"
alias articles="code $ARTICLE_DIRECTORY"
alias preview="amberHealth && npm run develop"
alias previewDrafts="GATSBY_SHOW_DRAFTS=true npm run develop"
alias update="amberHealth && git checkout master && git pull && npm i || echo -e "$RED_COLOR Oh dang! Maybe try committing first? 🤔 $WHITE_COLOR""
alias updateScripts="amberHealth && git pull && cp amber-scripts.sh ~ && source ~/.bash_profile || echo -e "$RED_COLOR Oh dang! Error while pulling from GitHub 😵 Maybe try committing first? 🤔 $WHITE_COLOR""

# functions

# commits, pulls, and pushes to GitHub
function publish() {
  cd $REPO_DIRECTORY
  
  git add .
  
  echo -e "$BLUE_COLOR Please provide a short commit message explaining your changes \n (not more than 50 characters: you can test this in VScode's Source Control tab) $WHITE_COLOR"

  read COMMIT_MSG

  if [[ ${#COMMIT_MSG} -gt 50 ]]; then
    TRUNCATED_COMMIT_MSG=${COMMIT_MSG:0:50}

    echo -e "$GREEN_COLOR Message over 50 characters, truncated to:$WHITE_COLOR $TRUNCATED_COMMIT_MSG $WHITE_COLOR"

    git commit -m "$TRUNCATED_COMMIT_MSG"
  else
    git commit -m "$COMMIT_MSG"
  fi

  git pull && git push && echo -e "$GREEN_COLOR SUCCESS! Your changes will be published soon. $WHITE_COLOR" || echo -e "$RED_COLOR Oh shit... something went wrong $WHITE_COLOR"
}

# templates a new markdown article for The Chronic site
function createArticle() {
  CURRENT_DATE=`date +%Y-%m-%d`

  echo -e "$BLUE_COLOR Please enter a title for your article: $WHITE_COLOR"
  read RAW_TITLE

  # scrub special characters ' " . , ! ? # % ()
  RAW_TITLE=${RAW_TITLE//./}
  RAW_TITLE=${RAW_TITLE//,/}
  RAW_TITLE=${RAW_TITLE//\'/}
  RAW_TITLE=${RAW_TITLE//\"/}
  RAW_TITLE=${RAW_TITLE//\!/}
  RAW_TITLE=${RAW_TITLE//\?/}
  RAW_TITLE=${RAW_TITLE//#/}
  RAW_TITLE=${RAW_TITLE//%/}
  RAW_TITLE=${RAW_TITLE//$/}
  RAW_TITLE=${RAW_TITLE//(/}
  RAW_TITLE=${RAW_TITLE//)/}

  KEBAB_CASE_TITLE=${RAW_TITLE// /-}
  TITLE=$(echo $KEBAB_CASE_TITLE | tr '[:upper:]' '[:lower:]')
  FILE_PATH="$ARTICLE_DIRECTORY/$TITLE.md"

  echo -e "--- \ntemplateKey: article" > $FILE_PATH
  echo "title: $RAW_TITLE" >> $FILE_PATH

  echo "date: $CURRENT_DATE" >> $FILE_PATH

  echo -e "$BLUE_COLOR Please enter a description: $WHITE_COLOR"
  read DESCRIPTION
  echo "description: $DESCRIPTION" >> $FILE_PATH

  echo -e "$BLUE_COLOR Please enter the image name (with extension):$GREEN_COLOR \n Example: pom-2.jpg $WHITE_COLOR"
  read FEATURED_IMAGE

  if [ ! -e $IMAGE_DIRECTORY/$FEATURED_IMAGE ]; then
    echo -e "$RED_COLOR Image \"$FEATURED_IMAGE\" not found. Opening images folder so you can add it now. \n $WHITE_COLOR Please make sure to give it the same name."
    
    # open image directory
    images
  fi

  echo -e "featuredImage: /img/$FEATURED_IMAGE" >> $FILE_PATH

  # scrub extension. this is necessary because gatsby pulls shareCardImage as a file (not a string path) so need redundant field :(
  SHARE_CARD_IMAGE=${FEATURED_IMAGE/.jpg/}
  SHARE_CARD_IMAGE=${SHARE_CARD_IMAGE/.jpeg/}
  SHARE_CARD_IMAGE=${SHARE_CARD_IMAGE/.png/}
  SHARE_CARD_IMAGE=${SHARE_CARD_IMAGE/.gif/}

  echo -e "shareCardImage: /img/$SHARE_CARD_IMAGE" >> $FILE_PATH
  echo -e "series: ''" >> $FILE_PATH
  echo -e "seriesNumber: ''" >> $FILE_PATH
  echo -e "seriesLink: ''" >> $FILE_PATH
  echo -e "tags:\n  - MAKE\n  - THESE\n  - TAGS" >> $FILE_PATH
  echo -e "keywords:\n  - MAKE\n  - THESE\n  - KEYWORDS\ndraft: true \n--- \n" >> $FILE_PATH

  code $FILE_PATH
}
