import React, { useState, useContext, useMemo, useEffect } from "react";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import { PrimaryHeading } from "@a11y/components/Typography";
import { SecondaryButton, GhostButton } from "@a11y/components/Buttons";
import { TabsSection, TabsButtons, TabsContent } from "./Tabs.styled";

export interface TabsButton {
  id: number | string;
  title: string;
}

export interface TabsContent {
  content: React.ReactElement;
  ids: (number | string)[];
}
interface TabsProps {
  title: string;
  buttons: TabsButton[];
  content: TabsContent[];
  id: string;
}

const Tabs = ({ title, buttons, content, id }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(buttons[0].id);
  const { dictionary } = useContext(LanguageContext);
  const activeContent = useMemo(
    () => content.filter((c: TabsContent) => c.ids.includes(activeTab)),
    [activeTab, content]
  );

  useEffect(() => {
    if (activeTab !== 1 && activeTab !== "all") {
      const el = document.querySelector<HTMLElement>(`#${id}_tab_${activeTab}`);
      el?.focus();
    }
  }, [activeTab]);

  return (
    <TabsSection>
      <PrimaryHeading>{title}</PrimaryHeading>
      <TabsButtons role="tablist" aria-label={title}>
        {buttons.map((b: TabsButton) => {
          const common = {
            role: "tab",
            ariaLabel: `${dictionary.expositions.show} ${b.title}`,
            key: b.id,
            onClick: () => setActiveTab(b.id),
            id: `${id}_tab_${b.id}`,
            ariaControls: `${id}_tab_panel_${b.id}`,
            href: `#${id}_tab_panel_${b.id}`,
          };
          return b.id === activeTab ? (
            <SecondaryButton {...common} aria-selected="true">
              {b.title}
            </SecondaryButton>
          ) : (
            <GhostButton {...common} aria-selected="false">
              {b.title}
            </GhostButton>
          );
        })}
      </TabsButtons>
      <TabsContent
        id={`${id}_tab_panel_${activeTab}`}
        aria-labelledby={`${id}_tab_${activeTab}`}
        oneColumn={activeContent.length === 1}
        role="list"
      >
        {activeContent.map((c, i) => (
          <React.Fragment key={`tab-${i}`}>{c.content}</React.Fragment>
        ))}
      </TabsContent>
    </TabsSection>
  );
};

export default Tabs;
