function likedBy (names){
if(names.length === 0){
   console.log("0 likes");
  return "0 likes";
  }

  else if(names.length === 2 ){
    console.log("Liked by " +names[0] + " and " + names[1]);
      return "Liked by " +names[0] + " and " + names[1];
  }

  else if(names.length === 3){
    console.log("Liked by " + names[0] + " and " + Number(names.length-1) + " others")
    return  "Liked by " + names[0] + " and " + Number(names.length-1) + " others"
  }

  else {
    console.log("Liked by " + names[0] + ", "+names[1] + " and " + Number(names.length-2) +" others" )
    return  "Liked by " + names[0] + ", "+names[1] + " and " + Number(names.length-2) +" others"
  }
}
