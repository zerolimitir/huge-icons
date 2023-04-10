import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagDollar = (
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
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M14 12.75c0-.966-.895-1.75-2-1.75s-2 .784-2 1.75.895 1.75 2 1.75 2 .784 2 1.75S13.105 18 12 18s-2-.784-2-1.75'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 9.5V11m0 7v1.5'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M5.632 11.103A6 6 0 0 1 11.325 7h1.35a6 6 0 0 1 5.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3Z'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagDollar);
export default ForwardRef;
