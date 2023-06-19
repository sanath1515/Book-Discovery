import { render, fireEvent, screen } from "@testing-library/react";
import DropDown from "./Dropdown";
import { act } from "react-dom/test-utils";

describe("Dropdown test", () => {
	const handleChange = jest.fn();

	it("should render dropdown correctly", () => {
		const { queryByText } = render(
			<DropDown
				selectedId="1"
				items={[
					{ id: "1", name: "value1" },
					{ id: "2", name: "value2" },
				]}
				onChange={handleChange}
			/>
		);
		expect(queryByText("value1")).toBeTruthy();
	});

	it("should match snapshot", () => {
		const { queryByText } = render(
			<DropDown
				selectedId="1"
				items={[
					{ id: "1", name: "value1" },
					{ id: "2", name: "value2" },
				]}
				onChange={handleChange}
			/>
		);
		expect(queryByText("value1")).toMatchSnapshot();
	});
	it("should call handle change when dropdown option is changed", () => {
		const { container, queryByText, getAllByTestId } = render(
			<DropDown
				selectedId="1"
				placeHolderText="Sort by"
				items={[
					{ id: "1", name: "value1" },
					{ id: "2", name: "value2" },
				]}
				onChange={handleChange}
			/>
		);

		act(() => {
			const options = getAllByTestId("option");
			fireEvent.mouseDown(options[0]);
			options[0].click();
		});
		expect(handleChange).toHaveBeenCalled();

		fireEvent.change(screen.getByTestId("option"), {
			target: { value: "NONE" },
		});
		expect(screen.getByText("Sort by")).toBeInTheDocument();
		expect(handleChange).toHaveBeenCalled();
	});
});
