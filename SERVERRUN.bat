@echo off
title App Initiation
start cd client && npm start
start cd backend && nodemon server.js