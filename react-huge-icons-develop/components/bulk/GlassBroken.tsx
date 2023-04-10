import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlassBroken = (
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
            d='M12.75 13.996v7.254H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-7.254h1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M11.233 14h1.534c4.342 0 7.247-4.47 5.483-8.437l-1.32-2.97A1 1 0 0 0 16.018 2H7.983a1 1 0 0 0-.914.594l-1.32 2.97C3.987 9.53 6.892 14 11.234 14Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.835 4.33a.75.75 0 0 1 .336 1.006l-.957 1.914H13a.75.75 0 0 1 .67 1.086l-1.5 3a.75.75 0 1 1-1.34-.671l.957-1.915H11a.75.75 0 0 1-.67-1.085l1.5-3a.75.75 0 0 1 1.005-.336Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlassBroken);
export default ForwardRef;
