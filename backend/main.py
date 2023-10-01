from flask import Flask
from flask_restful import Resource, Api, reqparse

app = Flask("Outfit")
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument("Tops", required=True)
# go through and add parser for every category


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


class completeOutfit():
    def __init__(self, tops=dict, bottoms=dict, outerwear=dict, footwear=dict, accessories=dict):
        self.tops = tops
        self.bottoms = bottoms
        self.outerwear = outerwear
        self.footwear = footwear
        self.accessories = accessories
    # tops is tops = {"colour": x, "brand": y}
    # repeat this for rest of categories in completeOutfit


class Outfit(Resource):
    def get(self, outfit_id):
        if outfit_id == "all":
            return outfits
        return outfits[outfit_id]

    def put(self, outfit_id):
        args = parser.parse_args()
        new_outfit = {'tops': args['tops']}
        videos[video_id] = new_video
        return {}


api.add_resource(Outfit, '/outfits/<outfit_id>')

if __name__ == '__main__':
    app.run()
