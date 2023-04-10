import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeposit = (
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
            d='M18 3H6a4 4 0 0 0-1.5 7.71V7A1.5 1.5 0 0 1 6 5.5h12A1.5 1.5 0 0 1 19.5 7v3.71A4.001 4.001 0 0 0 18 3Zm0 16V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm-6.75-6.604-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeposit);
export default ForwardRef;
