import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const churchService = {
	async getBanner() {
		try {
			return {
				data: {
					data:
						[
							{
								'image': {
									path: '/images/church/dangdienra.gif',
								},
							},
							{
								'image': {
									path: '/images/church/sapdienra.gif',
								},
							},
							{
								'image': {
									path: '/images/church/dadienra.gif',
								},
							},
						],
				},
			}
		} catch (e) {
			return e
		}
	},
	async getChurchList(keySearch, longitude, latitude) {
		let location = ''
		let keyFilter = ''
		if (longitude && latitude) {
			location = `&location=${latitude},${longitude}`
		}

		if (keyFilter) {
			keyFilter = `&keySearch=${keySearch}`
		}

		try {
			const config = {
			    method: "get",
			    maxBodyLength: Infinity,
			    url: `https://api.phatgiao.info/api/church/list?perPage=10&currentPage=1${location}${keyFilter}`,
			    headers: {
			        "Content-Type": "application/json",
			    },
			};

			return await axios.request(config);

		} catch (e) {
			return e
		}
	},
	async getChurchDetail(id) {
		try {
			const config = {
			    method: "get",
			    maxBodyLength: Infinity,
			    url: `https://api.phatgiao.info/api/church/detail?church_id=${id}`,
			    headers: {
			        "Content-Type": "application/json",
			    },
			};

			return await axios.request(config);

		} catch (e) {
			return e
		}
	},
	async getChurchLivestream() {
		try {

			const config = {
			    method: "get",
			    maxBodyLength: Infinity,
			    url: "https://api.phatgiao.info/api/church/list-livestream?keySearch=&perPage=10&currentPage=1",
			    headers: {
			        "Content-Type": "application/json",
			    },
			};

			return await axios.request(config);
		} catch (e) {
			return e
		}
	},
}

export default churchService
