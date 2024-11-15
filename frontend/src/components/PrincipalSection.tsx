import React from "react";
import "../styles/PrincipalSection.css";
import { Video } from "./Video";
export const PrincipalSection: React.FC = () => {
  return (
    <section className="PrincipalSection">
      <Video
        srcVideoDesktop="https://cuerosvelezco.vtexcommercestable.com.br/api/dataentities/AA/documents/876/video/attachments/cap1_ban_desktp.mp4"
        srcVideoMobile="https://cuerosvelezco.vtexcommercestable.com.br/api/dataentities/AA/documents/877/video/attachments/cap1_ban_mbile.mp4"
      />

      <div className="PrincipalSection-button">
        <button>VER NUEVA COLECCIÓN</button>
      </div>
    </section>
  );
};
