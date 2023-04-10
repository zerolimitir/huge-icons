import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeLocationBig = (
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
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M21 17.986v-8.07c0-1.239-.57-2.408-1.544-3.169l-5-3.902a3.99 3.99 0 0 0-4.912 0l-5 3.902A4.018 4.018 0 0 0 3 9.916v8.07A4.007 4.007 0 0 0 7 22h10c2.21 0 4-1.797 4-4.014Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M16.305 15.801C16.305 18.084 14.152 22 12 22c-2.152 0-4.305-3.916-4.305-6.199 0-2.282 1.928-4.132 4.305-4.132s4.305 1.85 4.305 4.132Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.291 15.543a1.291 1.291 0 1 1-2.582 0 1.291 1.291 0 0 1 2.582 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeLocationBig);
export default ForwardRef;
