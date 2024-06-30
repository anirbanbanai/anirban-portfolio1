// import img from "../assets/skills/school camp.png";
import img from "@/assets/skills/school camp.png";

import img4 from "@/assets/pt.png";
import img5 from "@/assets/my bleust.png";
import Image from "next/image";

const MyProject = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-4xl font-bold text-center pb-4 mb-5">My Projects</h2>
      <div className="n3 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="book bg-slate-200 rounded-2xl p-5">
          <div>
            <div>
              <a href="https://github.com/anirbanbanai/eclo_bleu">
                Github code
              </a>
            </div>
            <div>
              <a href="https://eclo-bleu.vercel.app/">Live</a>
            </div>
          </div>
          <div className="cover">
            <div>
              <h2 className="text-2xl text-center font-semibold mb-3">
                Bleust
              </h2>
              <Image
                className="rounded-2xl max-w-[90%]"
                src={img5}
                alt="img"
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className="book bg-slate-200 rounded-2xl p-5">
          <div>
            <div>
              <a href="https://github.com/anirbanbanai/travel-goo">Code</a>
            </div>
            <div>
              <a href="https://travel-goo-phi.vercel.app/">Live</a>
            </div>
          </div>
          <div className="cover">
            <div>
              <h2 className="text-2xl text-center font-semibold mb-3">
                Travel Goo
              </h2>
              <Image
                className="rounded-2xl max-w-[90%]"
                src={img4}
                alt="img"
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>

        <div className="book bg-slate-200 rounded-2xl p-5">
          <div>
            <div>
              <a href="https://github.com/anirbanbanai/School-camp">Client</a>
            </div>
            <div>
              <a href="https://github.com/anirbanbanai/school-camp-server">
                Server
              </a>
            </div>
            <div>
              <a href="https://assign-12-d95ce.web.app/">Live</a>
            </div>
          </div>

          <div className="cover">
            <div>
              <h2 className="text-2xl text-center font-semibold mb-3">
                School Camping
              </h2>
              <Image
                className="rounded-2xl max-w-[90%]"
                src={img}
                alt="img"
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
