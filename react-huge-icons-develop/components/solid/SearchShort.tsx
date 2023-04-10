import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSearchShort = (
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
            d='M18.25 10.5a7.75 7.75 0 1 1-15.5 0 7.75 7.75 0 0 1 15.5 0Zm-7.75 9.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Zm10.922 1.672a1.975 1.975 0 0 1-2.793 0l-1.873-1.873a11.062 11.062 0 0 0 2.793-2.793l1.873 1.873a1.975 1.975 0 0 1 0 2.793Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShort);
export default ForwardRef;
