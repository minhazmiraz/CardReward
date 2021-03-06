import { useState } from "react";
import { Button } from "@material-ui/core";
import { BEST_CARD_PAGE } from "../../../common/constant";
import NoDataFound from "./NoDataFound";

const CategoryList = (props) => {
	const { storageData, setStorageData, setPageNo } = props;
	const categoryData = storageData.category_data;
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleInputChange = ({ target }) => {
		setSelectedCategory(target.value);
	};

	const handleSubmitButton = () => {
		setStorageData({
			...storageData,
			selected_category: selectedCategory,
		});
		setPageNo(BEST_CARD_PAGE);
	};

	console.log(storageData);

	return (
		<div className="category-list">
			{categoryData.length > 0 && (
				<center>
					<h2>Preferred Credit Card Rewards</h2>
				</center>
			)}
			<div style={{ margin: 20 }}>
				{categoryData.map((category) => (
					<div id={category} style={{ margin: 10 }}>
						<input
							key={category}
							value={category}
							name="category"
							type="radio"
							defaultChecked={category === storageData.selected_category}
							onChange={handleInputChange}
						/>
						<b style={{ padding: 5, fontSize: 16 }}>{category}</b>
					</div>
				))}
				{categoryData.length > 0 && (
					<Button
						variant="contained"
						size="small"
						color="primary"
						style={{ marginLeft: 10, marginTop: 5 }}
						onClick={() => handleSubmitButton()}
					>
						Get Best Card
					</Button>
				)}
			</div>
			{categoryData.length === 0 && <NoDataFound />}
		</div>
	);
};

export default CategoryList;
