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
            fillRule='evenodd'
            d='M7 2h8a2 2 0 0 1 2 2v1.5h-4.5A1.5 1.5 0 0 0 11 7v8a1.5 1.5 0 0 0 1.5 1.5H17V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.5-13H17a2 2 0 0 1 2 2v.25h-6.5V7Zm0 3.75H19V13a2 2 0 0 1-2 2h-4.5v-4.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobilePayment);
export default ForwardRef;
