import SkillSection from './SkillSection.js'
import ProjectSection from './ProjectSection.js'

const url = './archivo.json'
let skill = new SkillSection(url);
let project = new ProjectSection(url);
//icons-footer sections
let icon = [
    {
        anchor:"#",
        image:"./images/socialNetwork/youtube.svg"
    },
    {
        anchor:"#",
        image:"./images/socialNetwork/github.svg"
    },
    {
        anchor:"#",
        image:"./images/socialNetwork/linked-in.svg"
    }

]

skill.run()
project.run()

let iconsRun = () => {
    icon.forEach(element => {
        let span = document.createElement('SPAN')
        let anchor = document.createElement('A');
        let img = document.createElement('IMG')
        
        let href = document.createAttribute('href');
        let src = document.createAttribute("src");
        let spanClass = document.createAttribute('class');

        href.value = element.anchor;
        src.value = element.image;
        spanClass.value = 'px-3 mx-3'

        img.setAttributeNode(src);
        anchor.setAttributeNode(href);
        span.setAttributeNode(spanClass)

        anchor.appendChild(img);
        span.appendChild(anchor);
        document.getElementById("icons").appendChild(span);
    } )
}
iconsRun()



//skillSection('./archivo.json');