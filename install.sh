#!/usr/bin/env bash

WEBAPP_ROOT=/usr/local/java/tomcat/webapps/ROOT

rm -rf $WEBAPP_ROOT/css
rm -rf $WEBAPP_ROOT/fonts
rm -rf $WEBAPP_ROOT/img
rm -rf $WEBAPP_ROOT/js
rm $WEBAPP_ROOT/contacts.html
rm $WEBAPP_ROOT/contacts-rus.html
rm $WEBAPP_ROOT/games.html
rm $WEBAPP_ROOT/games-rus.html
rm $WEBAPP_ROOT/index.html
rm $WEBAPP_ROOT/index-rus.html
rm $WEBAPP_ROOT/others.html
rm $WEBAPP_ROOT/others-rus.html
rm $WEBAPP_ROOT/soft.html
rm $WEBAPP_ROOT/soft-rus.html
rm $WEBAPP_ROOT/team.html
rm $WEBAPP_ROOT/team-rus.html
cp -r ./build/* $WEBAPP_ROOT
