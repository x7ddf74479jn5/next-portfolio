import type { Meta } from "@storybook/react";

import { color } from "../variables";

export const ColorChart = () => {
  const colors = Object.entries(color).map(([key, value]) => {
    return { key, value, style: { ...styles.box, backgroundColor: value } };
  });

  return (
    <div style={styles.wrapper}>
      {colors.map((color) => {
        return (
          <div key={color.key}>
            <p style={styles.text}>{color.key}</p>
            <p style={styles.text}>{color.value}</p>
            <div style={color.style} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: "utils/ColorChart",
  component: ColorChart,
} as Meta;

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  box: {
    width: "120px",
    height: "120px",
  },
  text: {
    margin: "0",
  },
};
