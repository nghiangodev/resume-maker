import Unidecode from 'unidecode'

export const generateSlug = (name) => {
	if (!name) {
		return '' // Return a default value if name is not provided
	}
	const withoutDiacritics = Unidecode(name)

	return withoutDiacritics.toLowerCase().replace(/[^a-zA-Z0-9-]+/g, '-')
}

export const trackingLivestream = (status) => {
	switch (status) {
		//list view
		case 'dang-dien-ra':
			return {
				title: 'Đang diễn ra',
				type: 1,
			}
		case 'sap-dien-ra':
			return {
				title: 'Sắp diễn ra',
				type: 2,
			}
		default:
			return {
				title: 'Đã diễn ra',
				type: -1,
			}
	}
}

export const getThumbnailYtb = (url) => {
	const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const match = url.match(regex);

	if (match && match[1]) {
		return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
	} else {

		return ''
	}
}
