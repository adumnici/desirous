const apiKey = 'm8iAQWcafmEHgpAc8Tu55yN8fBI8tCMMrfeKUaUZYMXp6Akvg5KXJ2oKw0L5G7GZ2KFz2kELQ_3x_VEAQWUASkuOD5UJjBsoHxypt2quRPqoko6b1Mmt2e4ZEVZlXHYx'

const Yelp = {
	searchYelp(term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
				{headers: {
									Authorization: `Bearer ${apiKey}`,
								}}
			).then(response => { return response.json()
			}).then((jsonResponse) => {
				if(jsonResponse.businesses) {
					return jsonResponse.businesses.map((business) => {
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories[0].title,
							rating: business.rating,
							reviewCount: business.review_count,
						}
					})
				}
			})
	}
};

export default Yelp;
