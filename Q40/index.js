function make_albums(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions  and creating three variable with different values
var album1 = make_albums("Jaweria", "Album title 1");
var album2 = make_albums("Areeba", "album title 2");
var album3 = make_albums("Hamza", "album title 3", 10);
// printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
