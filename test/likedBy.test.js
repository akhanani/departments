describe('likedBy',function(){

it('should check that there is no one likes',function(){

assert.equal(likedBy([]), "0 likes");


});
it('should check that it likedby two people ',function(){

assert.equal(likedBy(["Liwa", "Lindani"]), "Liked by Liwa and Lindani");


});
it('should check that it likedby  three people ',function(){

assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa"]), "Liked by Liwa and 2 others");


});
it('should check that it likedby two and three others ',function(){

assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa", "Odwa", "Peter"]), "Liked by Liwa, Lindani and 3 others");


});

});
