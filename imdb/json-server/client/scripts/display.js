export default class Display {
    constructor($container,data){
        this.$container = $container;
        this.movies = data;
        
    }
    renderMovie(movie){
        return `<div><h1>${movie.title}</h1><img src="${movie.imageUrl}"></div>`       
    }
    render(movies) {
        let html = ""
        for (let movie of movies){
           html += this.renderMovie(movie);
        }
        this.$container.innerHTML=html;  
    }

}