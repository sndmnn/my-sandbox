export default function changeTheme(color) {
  return {
    type: 'CHANGE_THEME',
    payload: {
      color,
    },
  };
}
