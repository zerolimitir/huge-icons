import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayers = (
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
            d='m11.172 21.624-8.17-3.714c-.78-.355-.78-1.465 0-1.82l8.17-3.714a2 2 0 0 1 1.655 0l8.17 3.714a1 1 0 0 1 0 1.82l-8.17 3.714a2 2 0 0 1-1.655 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m11.172 16.624-8.17-3.714c-.78-.355-.78-1.465 0-1.82l8.17-3.714a2 2 0 0 1 1.655 0l8.17 3.714a1 1 0 0 1 0 1.82l-8.17 3.714a2 2 0 0 1-1.655 0Z'
        />
        <path
            fill='currentColor'
            d='M11.172 11.624 3.002 7.91c-.78-.355-.78-1.465 0-1.82l8.17-3.714a2 2 0 0 1 1.655 0l8.17 3.714a1 1 0 0 1 0 1.82l-8.17 3.714a2 2 0 0 1-1.655 0Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayers);
export default ForwardRef;
