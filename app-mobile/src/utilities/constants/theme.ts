interface themeObject {
    COLORS: {
        primmary: string,
        secondary: string,
        black: string,
        white: string,
    };
    SIZES: {
        h1: number,
        h2: number,
        h3: number,
        regular: number,
        small: number,
    };
}

export const theme: themeObject = {
    COLORS: {
        primmary: "hsl(107, 40%, 45%)",
        secondary: "hsl(240, 11%, 96%)",
        black: "hsl(0, 0%, 19%)",
        white: "hsl(0, 0%, 98%)",
    },
    SIZES : {
      h1: 38,
      h2: 30,
      h3: 23,
      regular: 18,
      small: 12,
    },
};