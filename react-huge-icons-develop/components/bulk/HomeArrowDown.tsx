import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeArrowDown = (
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
            d='M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.25 17c0 .414.336.75.75.75h2a.75.75 0 0 0 .67-.415l1-2a.75.75 0 0 0-1.34-.67l-.33.658-1.435-2.87c-.645-1.29-2.485-1.29-3.13 0l-1.211 2.423a.25.25 0 0 1-.448 0l-2.105-4.211a.75.75 0 1 0-1.342.67l2.106 4.212c.645 1.29 2.485 1.29 3.13 0l1.211-2.423a.25.25 0 0 1 .448 0l1.563 3.126H14a.75.75 0 0 0-.75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeArrowDown);
export default ForwardRef;
