function episodeChooser() {
    const season = Math.floor(Math.random() * 7) + 1;
    console.log('You have selected season ' + season + '.');
    
    switch (season) {
        case 1:
            let s1episode = Math.floor(Math.random() * 26) + 1;
            console.log('You have selected episode ' + s1episode + '.');
            break;
        case 2: 
            let s2episode = Math.floor(Math.random() * 22) + 1; 
            console.log('You have selected episode ' + s2episode + '.');
            break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            let s3to7episode = Math.floor(Math.random() * 26) + 1;
            console.log('You have selected episode ' + s3to7episode + '.');
            alert('You have selected season ' + season + ', episode ' + s3to7episode + '!');
            break;
    }
}

episodeChooser();