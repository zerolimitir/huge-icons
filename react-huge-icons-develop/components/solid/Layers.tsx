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
            fillRule='evenodd'
            d='M10.77 2.276a2.75 2.75 0 0 1 2.46 0l7.317 3.659c1.29.645 1.29 2.485 0 3.13l-7.317 3.659a2.75 2.75 0 0 1-2.46 0L3.453 9.065c-1.29-.645-1.29-2.485 0-3.13l7.317-3.659Zm-8.455 14.92a.75.75 0 0 1 .99-.381l8.187 3.639a1.25 1.25 0 0 0 1.016 0l8.187-3.64a.75.75 0 1 1 .61 1.371l-8.188 3.64a2.75 2.75 0 0 1-2.234 0l-8.188-3.64a.75.75 0 0 1-.38-.99Zm.99-4.881a.75.75 0 1 0-.61 1.37l8.188 3.64a2.75 2.75 0 0 0 2.234 0l8.188-3.64a.75.75 0 1 0-.61-1.37l-8.187 3.639a1.25 1.25 0 0 1-1.016 0l-8.187-3.64Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayers);
export default ForwardRef;
