import React from "react";

import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

function ProjectPage() {
  return (
    <>
        <h1>ini Projects</h1>
        <ProjectList projects={MOCK_PROJECTS} />
    </>
 )
}

export default ProjectPage;