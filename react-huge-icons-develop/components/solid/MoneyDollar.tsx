import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyDollar = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm10 5.25A1.25 1.25 0 1 1 13.25 10a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2-2.646V6.5a.75.75 0 0 0-1.5 0v.854A2.751 2.751 0 0 0 12 12.75 1.25 1.25 0 1 1 10.75 14a.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2 2.646v.854a.75.75 0 0 0 1.5 0v-.854A2.751 2.751 0 0 0 12 11.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyDollar);
export default ForwardRef;
