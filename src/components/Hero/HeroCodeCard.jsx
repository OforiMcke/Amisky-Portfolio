import { motion } from "framer-motion";
import { heroData } from "../../data/portfolioData";

export default function HeroCodeCard() {
  return (
    <motion.div
      className="code-card"
      initial={{ opacity: 0, scale: 0.85, rotateY: 12 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.4 },
        scale: { type: "spring", stiffness: 100, damping: 14, delay: 0.4 },
        y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.03, rotateY: -5, rotateX: 5 }}
    >
      <div className="code-card-head">
        <div className="window-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="code-filename">developer.js</span>
      </div>
      <pre className="code-body">
        <code>
          <span className="tok-kw">const</span> <span className="tok-var">dev</span> = {"{\n"}
          {"  "}<span className="tok-key">name</span>: <span className="tok-str">&quot;{heroData.name}&quot;</span>,{"\n"}
          {"  "}<span className="tok-key">focus</span>: <span className="tok-str">&quot;{heroData.focus}&quot;</span>,{"\n"}
          {"  "}<span className="tok-key">status</span>: <span className="tok-str">&quot;{heroData.status}&quot;</span>,{"\n"}
          {"  "}<span className="tok-key">stack</span>: <span className="tok-str">[&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;]</span>{"\n"}
          {"}"}
          <span className="code-cursor" />
        </code>
      </pre>
      <div className="code-hint">A little about my stack</div>
    </motion.div>
  );
}
