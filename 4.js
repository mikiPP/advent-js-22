function fitsInOneBox(boxes) {
	const sortedBoxes = boxes
		.slice()
		.sort((a, b) => (b.l - a.l) & (b.w - a.w) & (b.h - a.h));

	const isLowerThanThePreviousOne = (box, index, array) => {
		const previousOne = array[index - 1];
		return (
			!previousOne ||
			(box.l < previousOne.l) &
				(box.w < previousOne.w) &
				(box.h <= previousOne.h)
		);
	};

	return sortedBoxes.every(isLowerThanThePreviousOne);
}
