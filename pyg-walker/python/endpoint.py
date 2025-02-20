from morph import auth
from morph import plugin_app
from fastapi import Security
from fastapi.responses import HTMLResponse
import pygwalker as pyg
from morph_lib.function import load_data


@plugin_app.get("/pyg-walker/{alias}", response_class=HTMLResponse)
def pygwalker(alias: str, _=Security(auth)):
    df = load_data(alias)
    return pyg.to_html(df)
