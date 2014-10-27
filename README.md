dustjs-helpers-gravatar
=======================

Helpers Gravatar for dustjs-linkedin package

[![KrakenJS Logo](http://krakenjs.com/img/kraken.svg)](http://krakenjs.com/)

#Install dependence

    npm install dustjs-helpers-gravatar --save

### On ./config/config.json find this code

    "view engines": {
        "js": {
          "module": "engine-munger",
          "renderer": {
            "method": "js",
            "arguments": [
              { "cache": true },
              {
                "views": "config:express.views",
                "view engine": "config:express.view engine",
                "specialization": "config:specialization",
                "i18n": "config:i18n"
              }
            ]
          }
        }
      },


### Replace with:

    "view engines": {
        "js": {
          "module": "engine-munger",
          "renderer": {
            "method": "js",
            "arguments": [
              { "cache": true, "helpers": ["dustjs-helpers-gravatar"] },
              {
                "views": "config:express.views",
                "view engine": "config:express.view engine",
                "specialization": "config:specialization",
                "i18n": "config:i18n"
              }
            ]
          }
        }
      },

**d**: (optional)

* identicon (**Default**)
* mm
* monsterid
* wavatar
* retro
* blank

**s**: (optional)

* 200 (**Default**)

**r**: (optional)

* g (**Default**)
* pg
* r
* x

**secure**: (optional)

* true (**Default**)
* false

**email** (required)


## On the view

    <span>
        {@gravatar email="{User.email}" s="30" r="pg" d="identicon" secure="true" /}
    </span>

Complete documentation [https://es.gravatar.com/site/implement/images/](https://es.gravatar.com/site/implement/images/).
