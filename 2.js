function countHours(year, holidays) {
	const isHoliday = (holiday) => {
		const SEPARATOR = "/";
    const SATURDAY = 6;
    const SUNDAY = 0

		const [month, day] = holiday.split(SEPARATOR);
		const weekDay = new Date(year, month - 1, day).getDay();
		return (weekDay !== SATURDAY) & (weekDay !== SUNDAY);
	};

	return holidays.filter(isHoliday).length * 2;
}
