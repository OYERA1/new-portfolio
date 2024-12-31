interface IGenericObject {
	id: number;
	content: string | Icon | Image;
	link?: string;
	alt?: string;
	text?: string;
}

interface IBOOK_SHELF extends IGenericObject {
	name: string;
	description: string;
}
