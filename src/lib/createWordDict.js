


function createWordDict() {
    $wordDict = {};
    for (let i = 0; i < $word.length; i++) {
        $wordDict[$word[i].toUpperCase()] = $wordDict[$word[i].toUpperCase()] + 1 || 1;
        console.log($wordDict);
    }
}

export default createWordDict;