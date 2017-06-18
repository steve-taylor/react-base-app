import React from 'react';
import pascalToKebabCase from './pascalToKebabCase';
import bemForBlock from './bemForBlock';

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
      <Component {...props} bem={bemForBlock((namespace ? `${namespace}-` : '') + pascalToKebabCase(Component.name))}/>;
