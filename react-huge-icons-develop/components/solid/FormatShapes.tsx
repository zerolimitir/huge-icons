import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFormatShapes = (
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
            d='M2 3v3a1 1 0 0 0 1 1h.75v10H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.75h10V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-.75V7H21a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v.75H7V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm3.25 14V7H6a1 1 0 0 0 1-1v-.75h10V6a1 1 0 0 0 1 1h.75v10H18a1 1 0 0 0-1 1v.75H7V18a1 1 0 0 0-1-1h-.75ZM12 7.25c.3 0 .571.179.69.455l3 7a.75.75 0 1 1-1.38.59l-.662-1.545h-3.296l-.663 1.545a.75.75 0 1 1-1.378-.59l3-7A.75.75 0 0 1 12 7.25Zm0 2.654 1.005 2.346h-2.01L12 9.904Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatShapes);
export default ForwardRef;
