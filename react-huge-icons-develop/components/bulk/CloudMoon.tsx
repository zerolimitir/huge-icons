import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoon = (
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
            d='M2 13a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.028 7.028 0 0 0-2.983-3.338A7 7 0 0 0 2 13Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21 12a5 5 0 1 0-8.544-5.089 7.028 7.028 0 0 1 2.982 3.338A4.997 4.997 0 0 1 17 10c1.636 0 3.088.786 4 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoon);
export default ForwardRef;
