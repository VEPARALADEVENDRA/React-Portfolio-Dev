function ProjectCard({ title, description, tags = [], imageUrl, liveUrl, codeUrl }) {
  return (
    <article className="card project-card">
      <div className="card-image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <div className="image-fallback" aria-hidden="true" />
        )}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags?.length > 0 && (
          <ul className="tags">
            {tags.map((tag) => (
              <li key={tag} className="tag">{tag}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="card-footer">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">Live</a>
        )}
        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noreferrer">Code</a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard

