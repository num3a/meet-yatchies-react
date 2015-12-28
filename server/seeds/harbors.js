if(Harbors.find({}).count() === 0){
    Harbors.insert({ name : 'Nice'});
    Harbors.insert({ name : 'La Ciotat'});
    Harbors.insert({ name : 'Marseille'});
    Harbors.insert({ name : 'Brest'});
    Harbors.insert({ name : 'Saint Tropez'});
}