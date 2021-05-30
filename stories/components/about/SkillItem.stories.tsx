import type { Meta, Story } from "@storybook/react";
import type { ComponentProps } from "react";
import { SkillItem } from "src/components/about/Skills";

type Props = ComponentProps<typeof SkillItem>;

export default {
  title: "about/SkillItem",
  component: SkillItem,
} as Meta;

const Template: Story<Props> = (args) => {
  return <SkillItem {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  skill: {
    id: "",
    head: "ヘッダー",
    data: "テキスト欄",
  },
};
