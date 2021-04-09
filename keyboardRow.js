var findWords = function(words) {
    const row1 = new Set(['q','w','e','r','t','y','u','i','o','p']);
    const row2 = new Set(['a','s','d','f','g','h','j','k','l']);
    const row3 = new Set(['z','x','c','v','b','n','m']);
    console.log(row1, row2, row3);

    let myArr = words.forEach(word =>  {
        let wordArr = new Set(word);
        let wordexistsinrow1 = 0,wordexistsinrow2 = 0,wordexistsinrow3 = 0;
        row1.forEach(rowVal => {
            if(wordArr.has(rowVal) 
        });
    });
    
};

let words = ["Hello","Alaska","Dad","Peace"]
console.log(findWords(words));