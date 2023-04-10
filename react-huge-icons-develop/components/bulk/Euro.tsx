import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEuro = (
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
            d='M7.86 10.75a7.126 7.126 0 0 0 0 2.5H16a.75.75 0 0 1 0 1.5H8.303c1.106 2.635 3.755 4.5 6.864 4.5 2.08 0 3.957-.836 5.303-2.182a.75.75 0 0 1 1.06 1.061 8.976 8.976 0 0 1-6.363 2.621c-3.936 0-7.292-2.508-8.468-6H3a.75.75 0 0 1 0-1.5h3.34a8.674 8.674 0 0 1 0-2.5H3a.75.75 0 0 1 0-1.5h3.699c1.176-3.492 4.532-6 8.468-6a8.976 8.976 0 0 1 6.363 2.62.75.75 0 1 1-1.06 1.062 7.476 7.476 0 0 0-5.303-2.182c-3.11 0-5.758 1.865-6.864 4.5H16a.75.75 0 0 1 0 1.5H7.86Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEuro);
export default ForwardRef;
