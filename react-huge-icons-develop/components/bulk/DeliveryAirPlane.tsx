import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeliveryAirPlane = (
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
            d='M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.75 5a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='m5.434 15.828-1.55-1.513a1.117 1.117 0 0 0-.78-.315c-.77 0-1.303.751-1.033 1.455l1.517 3.95C4.188 20.964 5.717 22 7.425 22h13.126c.8 0 1.449-.633 1.449-1.414a1.4 1.4 0 0 0-.424-1l-1.449-1.414A4.149 4.149 0 0 0 17.23 17h-8.9a4.149 4.149 0 0 1-2.897-1.172Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryAirPlane);
export default ForwardRef;
