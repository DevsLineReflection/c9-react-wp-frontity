const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Pantheon WP",
      "description": "Powered by frontity"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Decoupled",
              "/category/decoupled"
            ],
            [
              "Future Gadgets",
              "/category/future-gadgets/"
            ],
            [
              "Blockchain",
              "/category/blockchain/"
            ],
            [
              "Metaverse",
              "/category/metaverse/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://dev-akm-wp-dcop.pantheonsite.io"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
