export type DynaClassName = (className?: string, active?: boolean) => string;

export const dynaClassName = (baseClassName: string): DynaClassName => {
	return (className: string = "", active: boolean = true): string =>
		active
			? className.split(" ")
				.map((subClassName: string) => `${baseClassName}${subClassName}`).join(" ")
			: "";
};