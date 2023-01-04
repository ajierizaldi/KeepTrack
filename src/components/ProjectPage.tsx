import React from "react";

import { MOCK_PROJECTS } from "./MockProjects";

function ProjectPage() {
  return (
    <>
        <h1>ini Projects</h1>
        <pre>
            {JSON.stringify(MOCK_PROJECTS, null, 3)};      
        </pre>
        
    </>
 )
}

export default ProjectPage;