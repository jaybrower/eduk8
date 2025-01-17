export const stringToColor = (value: string | null): string => {
    if (!value) {
        return '#757575';
    }

    // Code copied from https://mui.com/material-ui/react-avatar/#letter-avatars
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < value.length; i += 1) {
      hash = value.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const hashValue = (hash >> (i * 8)) & 0xff;
      color += `00${hashValue.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}