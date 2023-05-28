export default function specialAttacks(character) {
  const result = [];
  const attacks = character.special;
  attacks.forEach((element) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = element;
    result.push({
      id, name, description, icon,
    });
  });
  return result;
}
