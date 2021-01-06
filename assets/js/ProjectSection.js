class ProjectSection  {
    constructor(url){
        this.url = url;
    }
    async run () {
        const response = await fetch(this.url);
        const data = await response.json();
        
        data.project.forEach(element => {
            let container = document.createElement("DIV");
            let classContainer = document.createAttribute("class");
            classContainer.value = "col-sm-12 col-lg-6 my-5";
            container.attributes.setNamedItem(classContainer);
            container.innerHTML=`
            <div class="card">
                <img class="card-img-top" src=".${element.image}" alt="Card image cap">
                <div class="card-body">
                    <div style="height:5rem">
                        <h5 class="card-title">${element.titulo}</h5>
                    </div>
                    <div style="height:8rem">
                        <p class="card-text">${element.contenido}</p>
                    </div>
                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>
            </div>
            `;
            document.getElementById('project').appendChild(container);
        });
    }
}
export default ProjectSection