from random import randint

names = [
    ["Dalinar", "Kholin"],
    ["Kaladin", "Stormblessed"],
    ["Shallan", "Davar"],
    ["Adolin", "Kholin"],
    ["Jasnah", "Kholin"],
    ["Renarin", "Kholin"],
    ["Navani", "Kholin"],
    ["Torol", "Sadeas"],
    ["Helaran", "Davar"],
    ["Balat", "Davar"],
]

cities = [
    ("Miami", "FL"),
    ("Mount Dora", "FL"),
    ("New York", "NY"),
    ("New Jersey", "NJ"),
    ("Chicago", "IL"),
    ("San Antonio", "TX"),
    ("Austin", "TX"),
    ("San Francisto", "CA"),
    ("Las Vegas", "NV"),
    ("Los Angeles", "CA"),
]


for i in range(10):
    user = {
        "first_name": names[i][0],
        "last_name": names[i][1],
        "password": ("user1password",),
        "username": ".".join(names[i]).lower(),
        "phone_number": "-".join(
            [
                str(randint(111, 999)),
                str(randint(111, 999)),
                str(randint(111, 9999)),
            ]
        ),
        "address": " ".join([str(randint(1000, 999999)), "street"]),
        "city": cities[i][0],
        "state": cities[i][1],
        "zip_code": randint(10000, 99999),
        "question_one": ("What was your childhood nickname?",),
        "answer_one": ("asd",),
        "question_two": ("What was your childhood nickname?",),
        "answer_two": "asd",
    }
    print(user)
