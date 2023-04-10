import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBox = (
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
            d='M22 18V6.961c0-.07-.004-.141-.011-.211H15V9a3 3 0 1 1-6 0V6.75H2.011A2 2 0 0 0 2 6.961V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM18.096 2.877l2.966 2.373H2.939l2.966-2.373A4 4 0 0 1 8.404 2h7.193a4 4 0 0 1 2.499.877Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBox);
export default ForwardRef;
