from faker import Faker
from random import choice, random, randint

sources = ["lenta", "mosru"]

def get_timestamp():
    return randint(1, 1595769478)

f = Faker()

result = []

for i in range(30):
    item = {
        "title": f"{f.word()} уронил {f.word()}",
        "description": f.text(),
        "link": f"http://example.com/{f.word()}/{f.word()}",
        "image": "http://placehold.it/150x150",
        "source": choice(sources),
        "date_published": get_timestamp(),
        "category": f.word(),
    }
    result.append(item)

print(result)