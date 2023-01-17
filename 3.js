function distributeGifts(packOfGifts, reindeers) {
	const giftsWeight = packOfGifts.join("").length;
	const REINDEER_CAPACITY = 2;
	const reindersCapacity = reindeers.join("").length * REINDEER_CAPACITY;

	return Math.floor(reindersCapacity / giftsWeight);
}
