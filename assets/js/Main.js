import SkillSection from './SkillSection.js'
import ProjectSection from './ProjectSection.js'

const url = './archivo.json'
let skill = new SkillSection(url);
let project = new ProjectSection(url);
skill.run()
project.run()
//skillSection('./archivo.json');