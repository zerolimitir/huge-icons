import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgYoutube = (
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
            d='M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m10.447 8.724 4.764 2.381a1 1 0 0 1 0 1.79l-4.764 2.381A1 1 0 0 1 9 14.382V9.618a1 1 0 0 1 1.447-.894Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgYoutube);
export default ForwardRef;
