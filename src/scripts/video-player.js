const VideoPlayerScript = () => {

    class PlayerVideo {
        player;
        poster;
        content;
        clone;
        video;
        isLoaded;

        constructor(player) {
            this.play = this.play.bind(this);
            this.ended = this.ended.bind(this);
            this.player = player;
            this.poster = player.querySelector('.VideoPlayer-poster');
            this.poster.addEventListener('click', this.play, false);
            this.content = player.querySelector('.VideoPlayer-content');
            this.clone = null;
            this.video = null;
            this.isLoaded = false;
        }

        ended() {
            this.player.classList.remove('isPlaying');
        }

        play() {

            if ('content' in document.createElement('template')) {

                this.clone = document.importNode(this.content.content, true);
                this.player.appendChild(this.clone);

                this.video = this.player.querySelector('video');
                if (this.video !== null) {
                    if (!this.isLoaded) {
                        this.isLoaded = true;
                        this.video.addEventListener('ended', this.ended, false);
                    }
                    this.video.play();
                }

                this.player.classList.add('isPlaying');

            } else {
                // Une autre méthode pour ajouter les lignes
                // car l'élément HTML n'est pas pris en charge.
            }
        }
    }

    const videoPlayers = document.querySelectorAll('.VideoPlayer');
    videoPlayers.forEach((videoPlayer) => {
        const playerVideo = new PlayerVideo(videoPlayer);
    });
}

export {
    VideoPlayerScript,
}
