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
            d='M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14c0 1.648-1.881 2.589-3.2 1.6l-3.6-2.7a2 2 0 0 0-2.4 0l-3.6 2.7c-1.318.989-3.2.048-3.2-1.6Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M20 8H4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
