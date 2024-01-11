import { useState, useEffect } from 'react';
import { getProduse } from '../api/ApiAxios';

function useProduse() {
	const [produse, setProduse] = useState([]);
	const [totalPages, setTotalPages] = useState(2);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [filters, setFilters] = useState({}); // Filter object

	useEffect(() => {
		const fetchProduse = async () => {
			setLoading(true);
			try {
				let url = `produse&page=${currentPage}`;

				// Add filter properties and values to the URL
				for (const property in filters) {
					const value = filters[property];
					if (value) {
						url += `&filter-properties[]=${property}&filter-values[]=${value}`;
					}
				}
				console.log(url);
				const response = await getProduse(url);
				const { items, total_pages: totalPages } = response.data.data;
				setProduse((prevProduse) => [...prevProduse, ...items]);
				setTotalPages(totalPages);

				if (currentPage <= totalPages) {
					setCurrentPage(currentPage + 1);
				}
			} catch (error) {
				// Handle errors here if needed
				console.error('Error fetching produse:', error);
			}
			setLoading(false);
		};

		if (currentPage <= totalPages && !loading) {
			fetchProduse();
		}
	}, [currentPage, totalPages, loading, filters]);

	const loadMore = () => {
		if (currentPage <= totalPages && !loading) {
			setCurrentPage(currentPage + 1);
		}
	};

	const applyFilters = (newFilters) => {
		setFilters(newFilters);
		setCurrentPage(1); // Reset to the first page when applying filters
		setProduse([]); // Clear the previous products when filters change
	};

	return {
		produse,
		totalPages,
		currentPage,
		filters,
		loadMore,
		applyFilters,
	};
}

export default useProduse;

// import { useState, useEffect } from 'react';
// import { getProduse } from '../api/ApiAxios';

// function useProduse() {
// 	const [produse, setProduse] = useState([]);

// 	useEffect(() => {
// 		const getProduseList = async () => {
// 			try {
// 				const response = await getProduse();
// 				setProduse(response.data.data);
// 			} catch (error) {
// 				console.error('Error fetching produse:', error);
// 			}
// 		};
// 		getProduseList();
// 	}, []);

// 	return produse;
// }

// export default useProduse;
