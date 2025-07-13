import CollaborationCard from "../components/CollaborationCard";

export default function Dashboard() {
  return (
    <div className="text-white py-5">
      <div className="text-2xl py-5 border-b">Dashboard</div>

      <div className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <CollaborationCard
            title="Samarth Pandey"
            tags={["TKS @ NN Scholar", "Researcher @ Perrin"]}
            description="A rare blend of curiosity, consistency, and clarity of purpose. He absorbs feedback swiftly and turns ideas into action. Watching his journey evolve has been inspiring."
            image="/samarth.JPG"
          />
          <CollaborationCard
            title="Kshitij Ranjan"
            tags={["Product Engg @ Pamparazzi"]}
            description="Known him since childhood—always a driven and thoughtful person. His clarity, discipline, and focus make him stand out. Excited to see his journey unfold."
            image="/bituuuubroooo.jpg"
          />
          <CollaborationCard
            title="Mohit Pandey"
            tags={["SDE-1 @ GI Hitachi"]}
            description="Doesn&apos;t just solve — understands deeply. Calm, focused, and sharp with problem-solving. Truly inspiring to watch him grow."
            image="/aryan.JPG"
          />
          <CollaborationCard
            title="Aryan Sharma"
            tags={["Fullstack Developer"]}
            description="Met him in first year, and saw him grow into a focused builder. His curiosity and drive toward building solutions are outstanding."
            image="/ssharmaaaa.jpg"
          />
          <CollaborationCard
            title="Apurb Mishra"
            tags={["Fullstack Developer"]}
            description="A calm thinker with a strong problem-solving mindset. His support and perspective always add value. Great learning from him."
            image="/apurb.jpg"
          />
          <CollaborationCard
            title="Harmandeep Singh"
            tags={["Electronics Undergrad"]}
            description="A true problem solver with clarity and calm. He guides with precision and patience. Very motivating to work with."
            image="/harmandeep.png"
          />
        </div>
      </div>
    </div>
  );
}
