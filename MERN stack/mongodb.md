### CRUD
```
db.movies.find()
db.movies.findOne()
db.movies.find({"title" : "Duel"})
db.movies.find({},{}, {title : 1, year : 1})
db.movies.find({"author" : "David Fincher"}, {title : 1, genre : 1})
db.movies.find({"author" : "David Fincher"}, {title : 1, year : 1})
db.movies.find({"author" : "David Fincher"}, {title : 1})

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

### Operators
```
db.BookCollections.find().sort({ "average_rating": -1 }).limit(10)
db.BookCollections.find({$or : [{"author" : "Douglas Adams"} , {"author" : "Bill Bryson"}]}).count()
db.BookCollections.find({"authors" : {$in : ["W.Frederick Zimmerman", "J.K. Rowling/Mary GrandPré"]}})
db.BookCollections.find({"authors" : {$nin : ["W.Frederick Zimmerman", "J.K. Rowling/Mary GrandPré"]}})
```

### gt,lt,gte,lte
db.BookCollections.find({"average_rating" : {$gte : 4}}).count()
db.BookCollections.find({"authors" : "J.K. Rowling/Mary GrandPré", "average_rating" : {$gte : 4.5}}).count()
<<<<<<< HEAD
db.BookCollections.find({"average_rating" : {$gte : 4.7, $lte : 4.8}}).count()
db.BookCollections.find({"average_rating" : {$gt : 4.1, $lt : 4.2}}).sort("average_rating" , -1).limit(3)
=======
db.BookCollections.find({"average_rating" : {$gte : 4.7, $lte : 4.8}}).count()
>>>>>>> f5de417f4f94ed4ce97a86457ac0be782777f85c
