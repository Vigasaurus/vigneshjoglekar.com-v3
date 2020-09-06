import React from 'react';

export const CARD_DEFAULT_VALUE = {
	activeCard: null,
	setActiveCard: (newCard: string) => {},
};

export const projectCardContext = React.createContext(CARD_DEFAULT_VALUE);
