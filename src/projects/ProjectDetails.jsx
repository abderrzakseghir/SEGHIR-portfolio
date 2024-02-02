import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams();
  const projectId = params.projectId;
  return (
    <div>
      <h1>Project Details</h1>
      <p>Project ID: {projectId}</p>
    </div>
  );
};

export default ProjectDetails;
