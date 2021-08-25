import { isAlphabetic } from '../../util/Char';
import { createSimpleTransformer } from '../Transformers';

/**
 * Creates a transformer that skips non-alphabetic characters (`a`-`z`, `A`-`Z`).
 * This is useful when matching text on patterns that are solely comprised of alphabetic
 * characters (the pattern `hello` does not match `h.e.l.l.o` by default, but does with
 * this transformer).
 *
 * **Application order**
 *
 * It is recommended that this transformer be applied near the end of the transformer chain.
 *
 * @example
 * ```typescript
 * const transformer = resolveLeetSpeakTransformer();
 * const matcher = new PatternMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 *
 * @returns A container holding the transformer, which can then be passed to the [[PatternMatcher]].
 */
export function skipNonAlphabeticTransformer() {
	return createSimpleTransformer((c) => (isAlphabetic(c) ? c : undefined));
}
