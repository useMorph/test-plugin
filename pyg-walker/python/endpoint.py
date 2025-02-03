from morph import auth
from morph import plugin_app
from fastapi import Security


@plugin_app.get("/pygwalker/{alias}")
def pygwalker(alias: str, _=Security(auth)) -> dict:
    return {"alias": alias}
