import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonWindRain = (
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
            d='M21.75 8.564a6.485 6.485 0 0 0-5.51-2.02 8.535 8.535 0 0 0-2.957-2.888 5 5 0 0 1 8.468 4.907ZM5.464 17.042a7 7 0 1 1 9.975-8.793A4.995 4.995 0 0 1 17 8c1.636 0 3.088.786 4 2a5.002 5.002 0 0 1-2.932 7.886A2.25 2.25 0 0 0 14 15.969a2.25 2.25 0 0 0-4 0 2.25 2.25 0 0 0-4.012.025l-.525 1.048Zm7.233.236a.75.75 0 1 0-1.392-.557l-2 5a.75.75 0 1 0 1.392.558l2-5Zm-4.025.057a.75.75 0 0 0-1.342-.67l-1 2a.75.75 0 0 0 1.342.67l1-2Zm8 0a.75.75 0 0 0-1.342-.67l-1 2a.75.75 0 0 0 1.342.67l1-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonWindRain);
export default ForwardRef;
