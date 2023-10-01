from flask import Flask
from flask_restful import Resource, Api

app = Flask("Outfit")
api = Api(app)


class Outfit(Resource):

    def get(self):
        return "hello world"


outfits = {
    'outfit1': {"Tops": "Nike Cap"}
}


api.add_resource(Outfit, '/')

if __name__ == '__main__':
    app.run()
