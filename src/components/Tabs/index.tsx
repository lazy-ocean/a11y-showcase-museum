import React, { useState, useContext, useMemo } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { PrimaryHeading } from "../Typography";
import { SecondaryButton, GhostButton } from "../Buttons/Buttons";
import { TabsSection, TabsButtons, TabsContent } from "./Tabs.styled";

export interface TabsButton {
  id: number;
  title: string;
}

export interface TabsContent {
  content: React.ReactElement;
  ids: number[];
}
interface TabsProps {
  title: string;
  buttons: TabsButton[];
  content: TabsContent[];
}

const Tabs = ({ title, buttons, content }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(buttons[0].id);
  const { dictionary } = useContext(LanguageContext);
  const activeContent = useMemo(
    () => content.filter((c: TabsContent) => c.ids.includes(activeTab)),
    [activeTab, content]
  );

  return (
    <TabsSection>
      <PrimaryHeading>{title}</PrimaryHeading>
      <TabsButtons>
        {buttons.map((b: TabsButton) =>
          b.id === activeTab ? (
            <SecondaryButton
              aria-label={`${dictionary.expositions.show} ${b.title}`}
              key={b.id}
              onClick={() => setActiveTab(b.id)}
            >
              {b.title}
            </SecondaryButton>
          ) : (
            <GhostButton
              aria-label={`${dictionary.expositions.show} ${b.title}`}
              key={b.id}
              onClick={() => setActiveTab(b.id)}
            >
              {b.title}
            </GhostButton>
          )
        )}
      </TabsButtons>
      <TabsContent>{activeContent.map((c) => c.content)}</TabsContent>
    </TabsSection>
  );
};

export default Tabs;
