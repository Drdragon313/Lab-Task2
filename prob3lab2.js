var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
        
    }
];
for (var i = 0; i < library.length; i++) 
   {
    var book = "," + library[i].title + "," + ' by ' + library[i].author + ".";
    if (library[i].author=='Bill Gates') {
      console.log("reading status: "+library[i].readingStatus + book);
    }
    if (library[i].author=='Steve Jobs') {
        console.log("reading status: "+library[i].readingStatus + book);
      }
      if (library[i].author=='Suzanne Collins') {
        console.log("reading status: "+library[i].readingStatus + book);
      }
   }