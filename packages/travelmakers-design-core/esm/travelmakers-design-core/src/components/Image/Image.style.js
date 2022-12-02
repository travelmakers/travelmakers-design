import { createStyles } from '@travelmakers-design/styles';

var useStyles = createStyles((theme, { radius }) => {
  return {
    root: {
      position: "relative",
      display: "inline-block"
    },
    image: {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: radius ? radius in theme.radius ? theme.radius[radius] : radius : 0
    },
    placeholder: {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: theme.colorScheme === "dark" ? theme.palettes.primary[0] : theme.palettes.primary[0],
      backgroundColor: theme.colorScheme === "dark" ? theme.palettes.primary[0] : theme.palettes.primary[0],
      borderRadius: radius ? radius in theme.radius ? theme.radius[radius] : radius : 0
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=Image.style.js.map
