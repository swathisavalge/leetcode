var countSegments = function(s) {
    console.log(s.length);
    if(s.trim().length<=0) return 0;
    let segments = s.trim().split(' ');
    for(let i=0; i<segments.length; i++){
        if(segments[i]===""){
            segments.splice(i,1);
            i--
        }
    }
    return segments.length;
};

console.log(countSegments(", , , ,        a, eaefa"));