// src/components/Skills.js 
import "./styling/Skills.css"

export default function Skills() {
	return (
		<section id="Skills" className="SkillsContainer">
			<div className="technicalSkills">
        <div className="technicalSkillsHeaderContainer">
          <h2 className="technicalSkillsh2">Technical Skills</h2>
          <div className="technicalSkillsContent">
            <div className="languages_skills">
              <h3 className="languagesSkillsh2">Languages</h3>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>Javascript</li>
              <li>Haskell</li>
            </div>

            <div className="framework_skills">
              <h3 className="frameworkSkillsh2">Frameworks</h3>
              <li>Flask</li>
              <li>React</li>
              <li>Spring</li>
            </div>

            <div className="operatingsystem_skills">
              <h3 className="osSkillsh2">Operating System</h3>
              <li>Linux</li>
              <li>Mac OS</li>
              <li>Windows</li>
            </div>
          </div>
        </div>
      </div>
		</section>
	);

}
