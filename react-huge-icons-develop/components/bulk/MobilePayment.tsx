import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMobilePayment = (
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
            d='M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12 7h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6V7Zm1 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
        <path fill='currentColor' d='M12 10.5h8V9h-8v1.5Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgMobilePayment);
export default ForwardRef;
