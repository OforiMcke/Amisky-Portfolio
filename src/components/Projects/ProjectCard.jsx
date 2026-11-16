import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const { num, title, description, tags, image, link, linkLabel, status } = project;
  const usableLink = link && link !== "#" && !link.startsWith("#");
  const isExternal = usableLink && link.startsWith("http");

  return (
    <motion.article
      layout
      className="project-card"
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -12 }}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      <div className="project-media">
        {image ? <img src={image} alt={`${title} project preview`} loading="lazy" /> : <div className="project-placeholder"><span>{num}</span></div>}
        <span className="project-num-badge">{num}</span>
        {status && <span className="project-status">{status}</span>}
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags" aria-label="Technologies used">
          {tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
        </div>
        {usableLink ? (
          <motion.a
            href={link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="project-link"
            whileHover={{ x: 4 }}
            aria-label={`${linkLabel}: ${title}`}
          >
            {linkLabel || "View project ↗"}
          </motion.a>
        ) : (
          <span className="project-link project-link-muted">{linkLabel || "Link unavailable"}</span>
        )}
      </div>
    </motion.article>
  );
}
