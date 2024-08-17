export default class Side {
    constructor($container, data, filterDirAct) {
        this.filterDirAct = filterDirAct
        this.$container = $container;
        this.movies = data;
        this.derectors = this.movies.reduce(function (allDerectors, movie) {
            if (movie.director in allDerectors) {
                allDerectors[movie.director]++;
            }
            else {
                allDerectors[movie.director] = 1;
            }
            return allDerectors;
        }, {});
        this.actors = this.movies.reduce(function (allActors, movie) {
            for (let actor of movie.cast) {
                if (actor in allActors) {
                    allActors[actor]++;
                }
                else {
                    allActors[actor] = 1;
                }
                return allActors;
            }
        }, {});


    }
    renderOne(person, count ,type) {
        let p = document.createElement("p");
        p.innerHTML = `${person} (${count})`

        p.addEventListener('click', () => this.filterDirAct(person,this.movies, type))

        return p
        // return `<p  >${person} (${count}) </p>`


    }
    render() {
        let directorDiv = document.createElement("div");
        let directorHead = document.createElement("h1");
        directorHead.innerHTML = "Directors"
        this.$container.appendChild(directorHead);
        
        for (let director in this.derectors) {
            this.$container.appendChild(this.renderOne(director, this.derectors[director],"director"))
        }
        let actorDiv = document.createElement("div");
        let actorHead = document.createElement("h1")
        actorHead.innerHTML = "Actors"
        this.$container.appendChild(actorHead);
        
         for (let actor in this.actors) {
            this.$container.appendChild(this.renderOne(actor, this.actors[actor],"actor"))
        }
    
    }
    
}

            // let html = `<h1>Directors</h1>`;  
            // for (let director in this.derectors) {
            //     html += this.renderOne(director, this.derectors[director]);
            // }
            // html += `<h1>Actors</h1>`
            // for (let actor in this.actors) {
            //     html += this.renderOne(actor, this.actors[actor]);
            // }
            // this.$container.innerHTML = html;
    //     }
    // }