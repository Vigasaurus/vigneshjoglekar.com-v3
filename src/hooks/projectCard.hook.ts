import React from 'react';
import { CARD_DEFAULT_VALUE } from '../contexts/projectCard.context';

export const useProjectCard = () => {
	const [activeCard, setActiveCard] = React.useState(
		CARD_DEFAULT_VALUE.activeCard
	);

	const activateCard = React.useCallback((newCard) => {
		// console.log('New Active Card:', newCard);
		setActiveCard(newCard);
	}, []);

	return {
		activeCard,
		setActiveCard: activateCard,
	};
};
