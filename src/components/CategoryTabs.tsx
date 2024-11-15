import React, { useState } from "react";
import { Tabs } from "./Tabs";
import { Banner } from "./Banner";
import '../styles/CategoryTabs.css'
export const CategoryTabs: React.FC = () => {
  return (
    <Tabs
      headers={["MUJER", "HOMBRE"]}
      content={[
        <Banner
          textButton="MUJER"
          srcImage="https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/c8c9872d-c9ac-4156-8410-01c780c569c5___607cd69d7a9fb84838e4923578621b85.jpg"
          className="CategoryTab"
        />,
        <Banner
          textButton="HOMBRE"
          srcImage="https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/13c6de0e-6d36-4bbb-9c75-82457ce8df70___000e8dd8c03ebbbf633733626b307dce.jpg"
          className="CategoryTab"
        />,
      ]}
    />
  );
};
