import React from 'react';

/**
 * Given an optional CSS namespace, generate a factory function that, given a React component, generates a function
 * that, given an optional element (i.e. the E in BEM) and an optional modifier (the M in BEM), generates CSS classes.
 *
 * For example:
 *
 * <pre>
 * const MyComponent = ({title, section1, section2, important, bem}) =&gt; (
 *   &lt;div className={bem(null, {important})}&gt;
 *     &lt;h1 className={bem('title')}&gt;
 *       {title}
 *     &lt;/h1&gt;
 *     {sections.map(({id, highlighted, heading, body, extra}) =&gt; (
 *       &lt;section key={id} className={bem('section', {highlighted})}&gt;
 *         &lt;h2 className={bem('section-heading')}&gt;
 *           {heading}
 *         &lt;/h2&gt;
 *         &lt;p className={bem('section-body')}&gt;
 *           {body}
 *         &lt;/p&gt;
 *         {!!extra && (
 *           &lt;p className={bem('section-body', 'extra')}&gt;
 *             {body}
 *           &lt;/p&gt;
 *         )}
 *       &lt;/section&gt;
 *     ))}
 *   &lt;/div&gt;
 * );
 *
 * export default bemify('my-namespace')(MyComponent);
 * </pre>
 *
 * is equivalent to
 *
 * <pre>
 * const MyComponent = ({title, section1, section2, important}) =&gt; (
 *   &lt;div className={classnames('my-namespace-my-component', {'my-namespace-my-component--important': important})}&gt;
 *     &lt;h1 className="my-namespace-my-component__title"&gt;
 *       {title}
 *     &lt;/h1&gt;
 *     {sections.map(({id, highlighted, heading, body, extra}) =&gt; (
 *       &lt;section key={id} className={classnames('my-namespace-my-component__section', {'my-namespace-my-component__section--highlighted': highlighted})}&gt;
 *         &lt;h2 className="my-namespace-my-component__section-heading"&gt;
 *           {heading}
 *         &lt;/h2&gt;
 *         &lt;p className="my-namespace-my-component__section-body"&gt;
 *           {body}
 *         &lt;/p&gt;
 *         {!!extra && (
 *           &lt;p className={classnames('my-namespace-my-component__section-heading', {'my-namespace-my-component__section-heading--extra': extra})}&gt;
 *             {body}
 *           &lt;/p&gt;
 *         )}
 *       &lt;/section&gt;
 *     ))}
 *   &lt;/div&gt;
 * );
 *
 * export default MyComponent;
 * </pre>
 *
 * @param namespace
 */
export default namespace =>
  Component =>
    props =>
      <Component {...props} bem={bemFor((namespace ? `${namespace}-` : '') + pascalToKebabCase(Component.name))}/>;

export const bemFor = (block) =>
  (element, modifier) =>
    element && modifier ?
      `${block}__${element} ${modifiers(`${block}__${element}`, modifier)}`.trim() :
      element ?
        `${block}__${element}` :
        modifier ?
          `${block} ${modifiers(block, modifier)}`.trim() :
          block;

const pascalToKebabCase = s => s.replace(/(?:^|\.?)([A-Z])/g, (x,y) => '-' + y.toLowerCase()).replace(/^-/, '');

const modifiers = (base, modifiers) => (
  typeof modifiers === 'string' ?
    [`${base}--${modifiers}`] :
    typeof modifiers === 'object' && !(modifiers instanceof Array) ?
      Object
        .keys(modifiers)
        .filter((modifier) => modifiers[modifier])
        .map((modifier) => `${base}--${modifier}`) :
      []
).join(' ');
