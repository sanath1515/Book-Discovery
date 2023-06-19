import React, { FormEvent, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, makeStyles } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import ExploreTab, { Category } from "../../molecules/ExploreTab/index";
import { COLORS } from "../../../theme/constants";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import theme from "../../../theme/theme";
import { items } from "../../molecules/ExploreTab/constants";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

type ExploreProps = {
  name: string;
  items?: Category[];
};


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    maxHeight: "auto",
    width: "100%",
    maxWidth: "1100px",
    overflow: "visible",
    marginLeft: theme.spacing(88),
    marginTop: theme.spacing(4),
    padding: 0,
    "& .MuiList-padding":{
      padding:0
    }
  },
})((props: any) => (
  <Menu
  {...props}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}

  />
));

const useStyles = makeStyles(() => ({
  button: {
    textTransform: "none",

    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.57,
    letterSpacing: "normal",
    color: COLORS.CHARCOAL_GREY,

  },

  div: {
    paddingTop: 0,
  },

  root: {
    "& .MuiList-root MuiMenu-list MuiList-padding": {
      paddingTop: 0,
    },
    marginLeft: theme.spacing(2),
  },
}));

const Explore: React.FC<ExploreProps> = (props) => {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [expand, setExpand] = useState(true);
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleClick = (event: MouseEvent | FormEvent) => {
    if(props.name==="My Library")
    return
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
    setExpand(false);
  };

  const handleCategory = (category: string) => {
    console.log(category);

    dispatch({ type: "SET_CATEGORY", payload: category });
    history.push("/explore");
    handleClose();
  };


  return (
    <div className={classes.root}>
      <Button
        color="primary"
        onClick={handleClick}
        endIcon={
          !Boolean(anchorEl) ? (
            <ArrowDropDownOutlinedIcon />
          ) : (
            <ArrowDropUpOutlinedIcon />
          )
        }
        className={classes.button}
        data-testid="explore"
      >
        {" "}
        {props.name}
      </Button>


      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)&&props.name!=="My Library"}
        onClose={handleClose}
      >
        <ExploreTab
          items={items}
          getExploreCategory={(category) => handleCategory(category)}
          handleClose={handleClose}
        />
      </StyledMenu>
    </div>
  );
};

export default Explore;

