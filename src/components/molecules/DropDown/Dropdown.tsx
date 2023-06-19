import Select from "@material-ui/core/Select";
import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem } from "@material-ui/core";
import theme from "../../../theme/theme";
import { COLORS } from "../../../theme/constants";

const useStyles = makeStyles(() => ({
	formControl: {
		borderRadius: theme.spacing(1),
		border: `solid 1px ${COLORS.GREY_300}`,

		height: "38px",
		justifyContent: "center",
		alignItems: "baseline",
	},
	select: {
		paddingLeft: theme.spacing(3),
		marginRight: `${theme.spacing(1)}px !important`,
		alignItems: "center",
		color: COLORS.CHARCOAL_GREY

	},
	root: {
		alignItems: "center",
		"&:hover": {
			color: "white",
			backgroundColor: "blue",
		},
		

	},
	menuItemSelected: {
		alignItems: "center",
	},
	icon: {
		fontSize: "x-large",
		marginRight: theme.spacing(1),
		height: "20px",
		width: "20px",
	},
	selectRoot: {
		"&:focus": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));

export type Item = {
	id: string;
	name: string;
};

export type DropDownProps = {
	selectedId?: string;
	items: Array<Item>;
	onChange: (
		event: React.ChangeEvent<{ name?: string; value: unknown }>
	) => void;
	testId?: string;
	defaultValue?: string;
	placeHolderText?: string;
	ifEmptyMessage?: string;
	valueSelected?: string;
};

const DropDown: React.FC<DropDownProps> = ({
	selectedId,
	onChange,
	items,
	testId,
	defaultValue,
	placeHolderText,
	ifEmptyMessage,
	valueSelected,
}) => {
	const classes = useStyles();

	const getRenderValue = useCallback(
		(id?: string, placeholderText?: string, valueSelectedOf?: string) => {
			if (valueSelectedOf === "NONE") {

				return () => placeHolderText;
			}
			return id ? undefined : () => placeholderText;
		},
		[]
	);

	return (
		<FormControl className={classes.formControl}>
			<Select
				value={selectedId}
				onChange={onChange}
				displayEmpty={defaultValue ? false : true}
				disableUnderline
				classes={{
					select: classes.select,
					icon: classes.icon,
					// root: classes.selectRoot,

				}}
				data-testid="option"
				MenuProps={{ disableScrollLock: true }}
				defaultValue={defaultValue}
				renderValue={
					placeHolderText
						? getRenderValue(selectedId, placeHolderText, valueSelected)
						: undefined
				}
			>
				{!items.length && ifEmptyMessage && (
					<MenuItem
						key={ifEmptyMessage}
						value=""
						classes={{
							root: classes.root,
						}}
						data-testid="empty_value"
					>
						{ifEmptyMessage}
					</MenuItem>
				)}
				{items.map((item: Item, index) => {
					return (
						<MenuItem
							key={item.id}
							value={item.id}
							classes={{
								root: classes.root,
							}}
						>
							{item.name}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default DropDown;
