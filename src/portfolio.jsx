const Portfolio = ()=>{




return(<>


<section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>project tittle</h3>
            <p>description</p>
            <a href= project target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>

	</>
	)


}
export default Portfolio;
