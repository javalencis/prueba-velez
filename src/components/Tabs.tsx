import React, { ReactNode, useState } from "react";
import '../styles/Tabs.css'
interface TabsProps {
  headers: string[];
  content: ReactNode[];
}

export const Tabs: React.FC<TabsProps> = ({ headers, content }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <section className="Tabs">
      {headers.map((header, index) => (
        <button className={currentTab===index ? 'Tabs-buttons active' :'Tabs-buttons'} key={header} onClick={() => setCurrentTab(index)}>
          {header}
        </button>
      ))}
      <div>
        {content.map((c,index) => (
            currentTab===index && c
        ))}
      </div>
    </section>
  );
};
