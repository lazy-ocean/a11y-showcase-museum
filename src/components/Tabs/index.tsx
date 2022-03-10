import React, { useState } from "react";
import { PrimaryHeading } from "../Typography";
import { SecondaryButton, GhostButton } from "../Buttons/Buttons";
import { TabsSection, TabsButtons } from "./Tabs.styled";

interface TabsButton {
  id: number;
  title: string;
  content: React.ReactElement;
}

interface TabsProps {
  title: string;
  buttons: TabsButton[];
}

const Tabs = ({ title, buttons }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsSection>
      <PrimaryHeading>{title}</PrimaryHeading>
      <TabsButtons>
        {buttons.map((b: TabsButton, i: number) =>
          i === activeTab ? (
            <SecondaryButton key={i} onClick={() => setActiveTab(i)}>
              {b.title}
            </SecondaryButton>
          ) : (
            <GhostButton key={i} onClick={() => setActiveTab(i)}>
              {b.title}
            </GhostButton>
          )
        )}
      </TabsButtons>
      <div>{buttons[activeTab].content}</div>
    </TabsSection>
  );
};

export default Tabs;
