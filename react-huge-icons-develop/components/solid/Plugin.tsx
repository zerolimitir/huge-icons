import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlugin = (
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
            d='M20 3H8a2 2 0 0 0-2 2v3a1 1 0 0 1-1 1 3 3 0 1 0 0 6 1 1 0 0 1 1 1v3a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1 3 3 0 1 1 6 0 1 1 0 0 0 1 1h2a2 2 0 0 0 2-2v-3a1 1 0 0 0-1-1 3 3 0 1 1 0-6 1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlugin);
export default ForwardRef;
