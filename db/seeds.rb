# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

_deck = Deck.create({name: 'Javascript'})
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])


_deck = Deck.create({name: 'Ruby'})
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])


_deck = Deck.create({name: 'HTML'})
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])


_deck = Deck.create({name: 'CSS'})
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])
Card.create([{
    front: 'question', 
    back: 'answer', 
    focused: false,
    deck: _deck
}])


_deck = Deck.create({name: 'Focus Deck'})
# focus deck is initially empty

########################################################################
# here is the other way to seed the db with a csv file
# If you use this route to create cards in database, edit seed.csv file.

# require 'csv'    

# csv_text = File.read('decks.csv')
# csv = CSV.parse(csv_text, :headers => true)
# csv.each do |row|
#   # Moulding.create!(row.to_hash)
#   _deck = Deck.create({
#     deck_id: row[0],
#     name: row[1]
#   })
# end

# csv_text = File.read('cards.csv')
# csv = CSV.parse(csv_text, :headers => true)
# csv.each do |row|
#   # Moulding.create!(row.to_hash)
#   _card = Card.create({
#     front: row[0],
#     back: row[1],
#     focused: row[2],
#     deck_id: row[3]
#   })
# end

