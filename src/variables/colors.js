export const colors = {
    blueDark: '#0e3556',
    blue: '#1ba0fc',
    white: '#fff',
    green: '#93c647'
}

export const button = (type) => {
    switch (type) {

        case 'white':
            return (`
                background-color: ${colors.white};
                color: ${colors.blueDark};
                border: 1px solid ${colors.white};
                &:hover {
                    background-color: transparent;
                    color: ${colors.white};
                    border: 1px solid ${colors.white};
                }
            `);

        case 'blue':
            return (`
                background-color: ${colors.blue};
                color: ${colors.white};
                border: 1px solid ${colors.blue};
                &:hover {
                    background-color: transparent;
                    color: ${colors.blue};
                    border: 1px solid ${colors.blue};
                }
            `);

        case 'blueDark':
            return (`
                background-color: ${colors.blueDark};
                color: ${colors.white};
                border: 1px solid ${colors.blueDark};
                &:hover {
                    background-color: transparent;
                    color: ${colors.blueDark};
                    border: 1px solid ${colors.blueDark};
                }
            `);

        case 'clearWhite':
            return (`
                background-color: transparent;
                color: ${colors.white};
                border: 1px solid ${colors.white};
            `);

        case 'green':
            return (`
                background-color: ${colors.green};
                color: ${colors.white};
                border: 1px solid transparent;
                &:hover {
                    background-color: transparent;
                    color: ${colors.green};
                    border: 1px solid ${colors.green};
                }
            `);
        
        default :
            return '';
    }
}