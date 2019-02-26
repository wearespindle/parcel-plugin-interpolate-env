# parcel-plugin-interpolate-webmanifest

Parcel plugin that interpolates properties in ENV into .webmanifest files

## Installation

`npm i -d parcel-plugin-interpolate-webmanifest`
or
`yarn add --dev parcel-plugin-interpolate-webmanifest`


Attention: parcel-bundler has to be installed_

## Usage

This module can be used to interpolate values from .env files into .webmanifest files.
There is no need to enable the plugin in any configuration file. Just make sure it's in your package.json as a devDependency.
You have to escape the ENV with %% around it e.g. `%example%`.

### Example

_**manifest.webmanifest**_

```json
{
    "name": "%NAME%",
    "short_name": "%SHORT_NAME%",
    "display": "minimal-ui",
    "start_url": "%START_URL%",
    "scope": "/",
    "theme_color": "%THEME_COLOR%",
    "background_color": "%BACKGROUND_COLOR%"
}
```

_**.env**_

```
NAME=myapp
SHORT_NAME=My awesome app
START_URL=/
THEME_COLOR=#ff0000
BACKGROUND_COLOR=#0000ff
```

Use parcel like you would normally do to get an interpolated webmanifest.
