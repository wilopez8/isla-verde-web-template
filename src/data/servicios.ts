// Services shown on Inicio (short text) and Servicios (full text + list).
// The checklist items are suggestions: confirm them with the client.
import type { IconName } from '../components/Icon.astro';

export interface Servicio {
	title: string;
	icon: IconName;
	short: string;
	text: string;
	items: string[];
	image: string;
	alt: string;
}

export const servicios: Servicio[] = [
	{
		title: 'Jardines y exteriores',
		icon: 'palm',
		short: 'Diseño de patios, áreas de piscina y jardines frontales con grama, palmas y bordes de piedra.',
		text: 'Diseñamos patios, áreas de piscina y jardines frontales que se ven bien todo el año.',
		items: ['Diseño de jardín y selección de plantas', 'Palmas, grama y canteros', 'Bordes de piedra y caminos'],
		image: '/images/proyectos/cantero-palmas.jpg',
		alt: 'Palmas de tallo rojo en un cantero curvo con borde de piedra',
	},
	{
		title: 'Plantas de interior',
		icon: 'building',
		short: 'Plantas para lobbies, oficinas y restaurantes, elegidas según la luz y el uso de cada espacio.',
		text: 'Llevamos verde a lobbies, oficinas, hoteles y restaurantes, con plantas que se adaptan a cada ambiente.',
		items: ['Plantas según la luz de cada espacio', 'Materas a juego con la decoración', 'Proyectos para empresas y comercios'],
		image: '/images/proyectos/lobby-lamparas.jpg',
		alt: 'Lobby con palmas en materas grises y lámparas de fibra natural',
	},
	{
		title: 'Materas y arreglos',
		icon: 'sprout',
		short: 'Arreglos de suculentas y materas decorativas que llevan un detalle vivo a mesas y rincones.',
		text: 'Arreglos de suculentas y materas decorativas para regalar o para dar vida a una mesa o un rincón.',
		items: ['Arreglos de suculentas', 'Materas escultóricas y de diseño', 'Piezas a la medida de tu espacio'],
		image: '/images/proyectos/suculentas.jpg',
		alt: 'Arreglo de suculentas con piedras blancas en una matera de barro',
	},
];
