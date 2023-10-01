from flask import Flask
from flask_restful import Resource, Api

app = Flask("Outfit")
api = Api(app)


outfits = {
    'outfit1': {"Tops": "V Neck Shirt",
                "Bottoms": "Pleated pants",
                "Outerwear": "Denim Jacket",
                "Footwear": "New Balances",
                "Accessories": "Chain"},
    'outfit2': {"Tops": "White Turtle Neck",
                "Bottoms": "Pleated pants",
                "Outerwear": "Rain Jacket",
                "Footwear": "New Balances",
                "Accessories": "Rings"},
}


class Outfit(Resource):
    def get(self, outfit_id):
        if outfit_id == "":
            return outfits
        return outfits[outfit_id]


api.add_resource(Outfit, '/outfits/<outfit_id>')

if __name__ == '__main__':
    app.run()
