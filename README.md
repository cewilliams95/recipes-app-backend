# Recipes
There is a basic textarea interface that directs requests to an API for CRUD operations.
---------

The recipes backend is setup (with os.env options) to run locally in development mode at the moment. 
navigate to myrecipes and run `./env/Scripts/activate` to get the venv going, then `python -m manage.py runserver` to get the dev-server running at :8000.

The DB is still sqlite for testing. Updating to psql soon and deploying to DO Droplet.

For testing DB locally, install [json-server](https://github.com/typicode/json-server/tree/v0).

