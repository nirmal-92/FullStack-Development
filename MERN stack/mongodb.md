db.movies.find()
db.movies.findOne()
db.movies.find({"title" : "Duel"})
db.movies.find({},{}, {title : 1, year : 1})
db.movies.find({"author" : "David Fincher"}, {title : 1, genre : 1})
db.movies.find({"author" : "David Fincher"}, {title : 1, year : 1})
db.movies.find({"author" : "David Fincher"}, {title : 1})

### Create
```
db.movies.insertOne({"title : "13 Hours:The secret soldiers of Benghazi" , "author" : "Michael Bay, "year" : "2015", "genre" : "Biographical Action Thriller"})

db.movies.insertMany([
    {
        //datas
    },
    {
        //datas
    }
])
db.movies.updateOne({}. {$set : ""author" : "David Ayer"})
db.movies.find()
db.movies.findOne()
db.movies.find("author" : "Antony Fuqua")
db.movies.find().sort("year" , 1)
db.movies.find().count()

```