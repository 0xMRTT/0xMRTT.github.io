---
sidebar_position: 1
---

# MQTT2DB

## What is it ?

It's save mqtt payloads to a database with timestamp.

# How it works?

MQTT2DB suscribe to all topics by default (you can configure it for only suscribing to a listof topics). When it receives a message, MQTT2DB store the message in a database. You can easily access to the payload by executing `SELECT` on the database.

# What I need ?

Currently, Linux is only officialy supported. You need to have the latest version of python (currently 3.10) and you also need to install dependencies (with `poetry install` or with `pip install -r requirements.txt`). MQTT2DB works better with systemd because you can just enabld the unit.
