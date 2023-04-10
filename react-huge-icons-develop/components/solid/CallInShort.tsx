import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCallInShort = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.53 7.53a.75.75 0 0 1-1.06 0l-1.293-1.293a1.75 1.75 0 0 1 0-2.474L14.47 2.47a.75.75 0 1 1 1.06 1.06l-1.293 1.293a.25.25 0 0 0 0 .354L15.53 6.47a.75.75 0 0 1 0 1.06ZM21 19v-1.646a2 2 0 0 0-1.257-1.857l-2.034-.813a2 2 0 0 0-2.532.962L15 16s-2.5-.5-4.5-2.5S8 9 8 9l.354-.177a2 2 0 0 0 .963-2.532l-.814-2.034A2 2 0 0 0 6.646 3H5a2 2 0 0 0-2 2c0 8.837 7.163 16 16 16a2 2 0 0 0 2-2ZM17.177 6.237 18.47 7.53a.75.75 0 1 0 1.06-1.06l-.72-.72H21a.75.75 0 0 0 0-1.5h-2.19l.72-.72a.75.75 0 0 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallInShort);
export default ForwardRef;
