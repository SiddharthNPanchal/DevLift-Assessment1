import { Box, BoxProps, makeStyles} from "@material-ui/core";
import color from "color";

const useStyles = (c: string, blur: number) =>
  makeStyles(() => ({
    div: {
      backgroundColor: color(c).alpha(0.7).toString(),
      backgroundImage: `linear-gradient(to bottom right, ${color(c)
        .alpha(0.2)
        .toString()}, ${color(c).alpha(0).toString()})`,
      backdropFilter: `blur(${blur}px)`,
      borderRadius: "8px",
      padding: '20px'
    }
  }));

export interface ContainerDivProps extends BoxProps {
  color?: string;
  blur?: number;
}

export function ContainerDiv(props: ContainerDivProps) {
  const {
    color = "#e6e6e6",
    blur = 5,
    className,
    ...rest
  } = props;
  const classes = useStyles(color, blur)();

  return (
    <Box
      className={classes.div}
      {...rest}
    />
  );
}