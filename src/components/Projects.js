// src/components/Projects.js 
import "./styling/Projects.css"
import logo from "./styling/pictures/GitHub-Mark-64px.png"

export default function Projects() {
	return (
		<section className="Projects" id="Projects">
			<h2 className="ProjectsHeader">Projects</h2>
			  <table className="Styled-table-projects">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Languages</th>
              <th>GitHub</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simple shell</td>
              <td>
                A simple shell for Linux, was built in 9 stages as a group work
                2 year at Strathclyde.
              </td>
              <td>C</td>
              <td>
                <a href="https://github.com/tenos200/shell_c"
                  ><img
                    src={logo}
                    alt=""
                /></a>
              </td>
            </tr>
            <tr className="active-row">
              <td>Snake</td>
              <td>
                A graphical implementation of snake, created with Pygame library.
              </td>
              <td>Python</td>
              <td>
                <a href="https://github.com/tenos200/snakeTim"
                  ><img
                    src={logo}
                    alt=""
                /></a>
              </td>
            </tr>
            <tr>
              <td>GCU Bake Reworked</td>
              <td>
                A reworked version of the GCU bake project but done in a website
                format. Python flask was used to act as backend, SQLite as
                database and Javascript for the frontend.
              </td>
              <td>Python, Javascript, HTML, CSS</td>
              <td>
                <a href="https://github.com/tenos200/FlaskGCUBake"
                  ><img
                    src={logo}
                    alt=""
                /></a>
              </td>
            </tr>
            <tr className="active-row">
              <td>Cryptogram</td>
              <td>
                A CLI based application that was created as a group project at
                the my second year at university. The program allowed the user
                to play and saved a cryptogram, including some other
                functionalities.
              </td>
              <td>Java</td>
              <td>Waiting for marks to be released.</td>
            </tr>
            <tr>
              <td>Website Interview </td>
              <td>
                A simple website created to act as a presentation in the
                interview with DR Reid.
              </td>
              <td>Javascript, HTML, CSS</td>
              <td>
                <a href="https://github.com/tenos200/website_for_internship"
                  ><img
                    src={logo}
                    alt=""
                /></a>
              </td>
            </tr>
          </tbody>
        </table>
		</section>
	);
}
