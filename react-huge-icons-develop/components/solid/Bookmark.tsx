import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookmark = (
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
            d='M4 8.75V19c0 1.648 1.882 2.589 3.2 1.6l3.6-2.7a2 2 0 0 1 2.4 0l3.6 2.7c1.319.989 3.2.048 3.2-1.6V8.75H4Zm0-1.5h16V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.25Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
