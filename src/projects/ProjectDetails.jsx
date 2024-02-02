import React from 'react';

 const ProjectDetails = ({ match }) => {
  const projectId = match.params.index; // Récupère l'ID du projet depuis les paramètres d'URL
  // Utilisez l'ID du projet pour récupérer les détails du projet depuis votre source de données
  // Vous pouvez afficher les détails du projet ici
  return (
    <div>
      <h1>Project Details</h1>
      <p>Project ID: {projectId}</p>
     </div>
  );
}; 

export default ProjectDetails; 