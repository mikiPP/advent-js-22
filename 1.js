function wrapping(gifts) {
	const giftWrapper = (gift) => {
		const GIFT_PAPER_SYMBOL = "*";
		const SEPARATOR = "\n";
		const X_AXIS_SIDE_PAPER_PADDING = 2;

		const xAxisSideLength = gift.length + X_AXIS_SIDE_PAPER_PADDING;
		const giftWrapped = GIFT_PAPER_SYMBOL + gift + GIFT_PAPER_SYMBOL;
		const sidesWrapper = GIFT_PAPER_SYMBOL.repeat(xAxisSideLength);
		return sidesWrapper + SEPARATOR + giftWrapped + SEPARATOR + sidesWrapper;
	};

	return gifts.map(giftWrapper);
}
