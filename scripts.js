document.addEventListener('DOMContentLoaded', () => {
    const memeSection = document.getElementById('memes');
    const memes = [
        { type: 'image', src: './assets/meme1.jpeg', alt: 'funnyvideo'},
        { type: 'video', src: './assets/video.mp4', alt: 'Meme 1' },
        { type: 'image', src: './assets/meme2.webp', alt: 'Meme 2' },
        { type: 'image', src: './assets/meme3.avif', alt: 'Meme 3' },
        { type: 'image', src: './assets/meme4.jpeg', alt: 'Meme 4' },
        { type: 'image', src: './assets/meme5.jpg', alt: 'Meme 5' },
        { type: 'video', src: './assets/video1.mp4', alt: 'funnymemevideo'},
        { type: 'image', src: './assets/meme6.jpeg', alt: 'Meme6'},
        { type: 'image', src: './assets/meme7.jpeg', alt: 'Meme7'},
        { type: 'image', src: './assets/meme8.jpg', alt: 'Meme9'},
        { type: 'image', src: './assets/meme9.jpeg', alt: 'Meme10'},
        { type: 'image', src: './assets/meme10.jpeg', alt: 'Meme11'},
        { type: 'image', src: './assets/meme11.jpeg', alt: 'Meme12'},
        { type: 'image', src: './assets/meme12.jpeg', alt: 'Meme13'},
        { type: 'image', src: './assets/gifimages/gif1.gif', alt: 'Meme14'},
        { type: 'image', src: './assets/gifimages/gif2.gif', alt: 'Meme15'},
        { type: 'image', src: './assets/gifimages/gif3.gif', alt: 'Meme16'},
        { type: 'image', src: './assets/gifimages/gif4.gif', alt: 'Meme17'},
        { type: 'image', src: './assets/gifimages/gif5.gif', alt: 'Meme18'},
        { type: 'image', src: './assets/gifimages/gif7.webp', alt: 'Meme19'},
        { type: 'image', src: './assets/gifimages/gif8.webp', alt: 'Meme20'},
        { type: 'image', src: './assets/gifimages/gif9.webp', alt: 'Meme21'},
        { type: 'image', src: './assets/gifimages/gif10.webp', alt: 'Meme22'},
        { type: 'image', src: './assets/gifimages/gif12.webp', alt: 'Meme23'},
        { type: 'image', src: './assets/gifimages/gif13.webp', alt: 'Meme24'},
        { type: 'image', src: './assets/gifimages/gif14.webp', alt: 'Meme25'},
        { type: 'image', src: './assets/gifimages/gif15.webp', alt: 'Meme26'},
        { type: 'image', src: './assets/gifimages/gif16.webp', alt: 'Meme27'},  
        { type: 'image', src: './assets/gifimages/gif17.gif', alt: 'Meme28'}, 
        { type: 'image', src: './assets/gifimages/gif18.gif', alt: 'Meme29'}, 
        { type: 'image', src: './assets/meme14.jpg', alt: 'Meme30'},
        { type: 'image', src: './assets/meme15.jpg', alt: 'Meme31'},
        { type: 'image', src: './assets/meme16.jpg', alt: 'Meme32'},
        { type: 'image', src: './assets/meme17.jpg', alt: 'Meme33'},



    ];

    const columns = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];
    columns.forEach(column => {
        column.className = 'column';
        memeSection.appendChild(column);
    });

    memes.forEach((meme, index) => {
        const memeDiv = document.createElement('div');
        memeDiv.className = 'meme';

        if (meme.type === 'image') {
            const img = document.createElement('img');
            img.src = meme.src;
            img.alt = meme.alt;
            memeDiv.appendChild(img);
        } else if (meme.type === 'video') {
            const video = document.createElement('video');
            video.src = meme.src;
            video.alt = meme.alt;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.setAttribute('playsinline', '');
            video.setAttribute('controls', '');
            memeDiv.appendChild(video);
        }
        const iconDiv = document.createElement('div');
        iconDiv.className = 'icons';
        iconDiv.innerHTML = `
            <i class="fas fa-heart" id="heart"></i>
            <i class="fas fa-eye"></i>
            <i class="fas fa-download"></i>
            <i class="fas fa-comment"></i>
        `;
        memeDiv.appendChild(iconDiv);

        columns[index % 4].appendChild(memeDiv);
    });
});


