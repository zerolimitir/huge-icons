import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeCelsius = (
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
            d='M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Zm-8.99-6.217c-1.25 0-2.26 1.01-2.26 2.25s1.01 2.25 2.26 2.25c.574 0 1.096-.212 1.495-.563a.75.75 0 1 1 .99 1.126 3.753 3.753 0 0 1-2.486.937A3.755 3.755 0 0 1 8.25 14a3.755 3.755 0 0 1 3.76-3.75 3.75 3.75 0 0 1 2.485.937.75.75 0 1 1-.99 1.126 2.253 2.253 0 0 0-1.496-.563Zm3.49-1.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeCelsius);
export default ForwardRef;
