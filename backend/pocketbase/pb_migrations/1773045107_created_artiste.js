/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text709260295",
        "max": 0,
        "min": 0,
        "name": "nomArtiste",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select2203071480",
        "maxSelect": 1,
        "name": "genre",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "blues",
          "house",
          "jazz",
          "rock",
          "techno",
          "pop",
          "rap",
          "classique",
          "folk",
          "métal",
          "K-pop",
          "C-pop",
          "J-pop",
          "country",
          "soul",
          "disco",
          "electro",
          "funk",
          "hip-hop",
          "lo-fi",
          "phonk",
          "reggae",
          "RnB"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3835118808",
        "max": 0,
        "min": 0,
        "name": "descriptionArtiste",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "date819920929",
        "max": "",
        "min": "",
        "name": "dateRepresentation",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3075308203",
        "max": 0,
        "min": 0,
        "name": "nomScene",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file477931078",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "photoPrincipale",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "file2658997648",
        "maxSelect": 99,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "galerie",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_223627941",
    "indexes": [],
    "listRule": null,
    "name": "artiste",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941");

  return app.delete(collection);
})
