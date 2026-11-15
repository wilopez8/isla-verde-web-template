// Project gallery used on Inicio and Proyectos.
// Photos live in public/images/proyectos/. To add a project, copy the photo
// there and add an entry below.

export type Categoria = 'Exteriores' | 'Interiores' | 'Materas';

export interface Proyecto {
	title: string;
	text: string;
	category: Categoria;
	image: string;
	alt: string;
}

export const categorias: Categoria[] = ['Exteriores', 'Interiores', 'Materas'];

export const proyectos: Proyecto[] = [
	{
		title: 'Jardín de piscina',
		text: 'Palmas, plantas tropicales y piedra de río alrededor de la piscina.',
		category: 'Exteriores',
		image: '/images/proyectos/jardin-piscina.jpg',
		alt: 'Jardín tropical junto a una piscina con palmas y piedra blanca',
	},
	{
		title: 'Lobby con palmas',
		text: 'Palmas y plantas bajas en materas cuadradas del mismo tono.',
		category: 'Interiores',
		image: '/images/proyectos/lobby-palmas.jpg',
		alt: 'Lobby con palmas en materas cuadradas de concreto',
	},
	{
		title: 'Materas escultóricas',
		text: 'Palmas en materas con forma de rostro para una entrada.',
		category: 'Materas',
		image: '/images/proyectos/materas-rostro.jpg',
		alt: 'Dos palmas en materas esculturales con forma de rostro',
	},
	{
		title: 'Jardín frontal',
		text: 'Capas de color y textura a lo largo de la entrada.',
		category: 'Exteriores',
		image: '/images/proyectos/jardin-frontal.jpg',
		alt: 'Jardín frontal con árboles de tronco blanco, bromelias y piedras',
	},
	{
		title: 'Lobby con lámparas naturales',
		text: 'Palmas en materas grises bajo lámparas de fibra.',
		category: 'Interiores',
		image: '/images/proyectos/lobby-lamparas.jpg',
		alt: 'Lobby con palmas en materas grises y lámparas de fibra natural',
	},
	{
		title: 'Cantero de palmas',
		text: 'Palmas de tallo rojo en un cantero curvo con borde de piedra.',
		category: 'Exteriores',
		image: '/images/proyectos/cantero-palmas.jpg',
		alt: 'Palmas de tallo rojo en un cantero curvo con borde de piedra',
	},
	{
		title: 'Arreglo de suculentas',
		text: 'Suculentas y piedra blanca en una matera de barro.',
		category: 'Materas',
		image: '/images/proyectos/suculentas.jpg',
		alt: 'Arreglo de suculentas con piedras blancas en una matera de barro',
	},
	{
		title: 'Ficus en matera de diseño',
		text: 'Un ficus junto a una columna en un espacio interior.',
		category: 'Interiores',
		image: '/images/proyectos/ficus.jpg',
		alt: 'Ficus en una matera negra con forma de rostro junto a una columna',
	},
	{
		title: 'Jardín de entrada',
		text: 'Cycas, palmas y un borde suave de grama.',
		category: 'Exteriores',
		image: '/images/proyectos/jardin-entrada.jpg',
		alt: 'Borde curvo de grama con cycas y palmas junto a una casa moderna',
	},
	{
		title: 'Matera junto a la piscina',
		text: 'Una pieza escultórica con plantas colgantes.',
		category: 'Materas',
		image: '/images/proyectos/matera-piscina.jpg',
		alt: 'Matera con forma de rostro con plantas junto a una piscina',
	},
	{
		title: 'Palmas y piedra de río',
		text: 'Plantas tropicales sobre un lecho de piedra.',
		category: 'Exteriores',
		image: '/images/proyectos/palmas-piedra.jpg',
		alt: 'Palmas y plantas tropicales sobre piedra de río',
	},
	{
		title: 'Jardín de palmas',
		text: 'Varias capas de plantas junto a un muro blanco.',
		category: 'Exteriores',
		image: '/images/proyectos/jardin-palmas.jpg',
		alt: 'Jardín de palmas con arbustos tropicales junto a un muro blanco',
	},
];

// CSS class for a category tag (see .tag-* in global.css).
export const tagClass = (category: Categoria) => `tag tag-${category.toLowerCase()}`;
