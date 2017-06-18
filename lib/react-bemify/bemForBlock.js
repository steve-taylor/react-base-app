const modifiers = (base, modifiers) => (
  typeof modifiers === 'string' ?
    [`${base}--${modifiers}`] :
    typeof modifiers === 'object' && !(modifiers instanceof Array) ?
      Object
        .keys(modifiers)
        .filter(modifier => modifiers[modifier])
        .map(modifier => `${base}--${modifier}`) :
      []
).join(' ');

export default block =>
  (element, modifier) =>
    element && modifier ?
      `${block}__${element} ${modifiers(`${block}__${element}`, modifier)}`.trim() :
      element ?
        `${block}__${element}` :
        modifier ?
          `${block} ${modifiers(block, modifier)}`.trim() :
          block;
