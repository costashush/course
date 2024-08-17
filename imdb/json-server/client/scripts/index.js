import Api from './api.js';
import Display from './display.js';
import Side from './side.js';

class Main {
    constructor() {
        const $sideBar = document.querySelector('.sidebar');
        const $mainDisplay = document.querySelector('.main')
        const $search = document.querySelector('.search')
        // this.dispalyMovies = new Display($mainDisplay);

        this.filterDirAct = this.filterDirAct.bind(this);

        this.init($mainDisplay, $sideBar, $search);

    }
    filterDirAct(clicked, movies, type) {
        if (type == "director") {
            this.dispalyMovies.render(movies.filter((movie) => movie.director == clicked))
        } else {
            this.dispalyMovies.render(movies.filter((movie) => { for (let actor of movie.cast) { return actor == clicked } }))
        }
    }

    filter(movies, input) {
        return movies.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()));
    }
    init($mainDisplay, $sideBar, $search) {
        let api = new Api
        api.fetchData().then(movies => {
            this.movies = movies;
            this.dispalyMovies = new Display($mainDisplay);
            this.sideBar = new Side($sideBar, movies, this.filterDirAct);
            this.dispalyMovies.render(movies);
            this.sideBar.render();

            $search.addEventListener("input", (e) => {
                let filtered = this.filter(movies, e.target.value)
                this.dispalyMovies.render(filtered);
            });
        });
    }
}
new Main();







