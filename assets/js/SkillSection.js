class SkillSection  {
    constructor(url){
        this.url = url;
    }
    async run () {
        const response = await fetch(this.url);
        const data = await response.json();
        
        data.skill.forEach(element => {
            let container = document.createElement("DIV");
            let classContainer = document.createAttribute("class");
            classContainer.value = "col-4 px-5";
            container.attributes.setNamedItem(classContainer);
            container.innerHTML=`
            <div class="my-3" style="height:200px">
                <img src="${element.image}" alt="it here now?" width="150" class="rounded mx-auto d-block"/>
            </div>
            <h3>${element.titulo}</h3>
            <p>${element.contenido}</p>
            `;
            document.getElementById('skill').appendChild(container);
        });
    }
}
export default SkillSection
