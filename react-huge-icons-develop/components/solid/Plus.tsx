import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlus = (
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
            d='M10 18a2 2 0 1 0 4 0v-4h4a2 2 0 1 0 0-4h-4V6a2 2 0 1 0-4 0v4H6a2 2 0 1 0 0 4h4v4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
