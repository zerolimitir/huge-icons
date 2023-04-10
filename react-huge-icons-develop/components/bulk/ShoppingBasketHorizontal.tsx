import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketHorizontal = (
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
            d='M18.506 6.025a3.999 3.999 0 0 0-.47-.028H16.61L14.4 3.05a.75.75 0 1 1 1.2-.9l2.906 3.875ZM7.39 5.997H5.965a4 4 0 0 0-.471.028L8.4 2.15a.75.75 0 0 1 1.2.9L7.39 5.997Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18.035 5.997H5.965c-2.236 0-3.97 1.844-3.965 4h20c.005-2.156-1.73-4-3.965-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M20.282 18.805a3.972 3.972 0 0 1-3.882 3.192H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8A4.075 4.075 0 0 1 2 10.004h20a4.078 4.078 0 0 1-.083.801l-1.635 8ZM7.25 13.997a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM9 17.247a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketHorizontal);
export default ForwardRef;
