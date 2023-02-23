# Mass Effect Codex API

This is the (unofficial) Mass Effect Codex REST API. It includes all codex entries from the [Mass Effect](https://www.ea.com/games/mass-effect/mass-effect-legendary-edition) video game series (minus the DLCs).

## Motivation

While planning out my [Mass Effect Codex](https://github.com/karla-codes/mass-effect-codex) project, I discovered that a Mass Effect API did not exist. I thought it would be a great learning experience to build an API since it's a subject I don't have much experience with. I didn't want to get too complicated with it so my goal was simple: create a REST API that would allow me to query a database for codex entries.

## Tech Stack

- Express
- MongoDB
- Mongoose
- Fly

## REST API

Below are all the available requests:

GET - Get all entries

`/api/entries/all`

GET - Get all entries in Primary category

`/api/entries/primary`

GET - Get all entries in Secondary category

`/api/entries/secondary`

GET - Get all entries from a specific Subject

`/api/entries/:subjectId`

GET - Get all entries from a specific subject in the Primary category

`/api/entries/primary/:subjectId`

GET - Get all entries from a specific subject in the Secondary category

`/api/entries/secondary/:subjectId`


## Credits

Below are links to all of the resources used:

- [N7 HQ](https://n7hq.masseffect.com/codex/)
- [Mass Effect Wiki](https://masseffect.fandom.com/wiki/Codex)
