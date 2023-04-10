import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowTransferRectangleHalf = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
        />
        <path
            fill='currentColor'
            d='M14.53 7.47a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM16 10v.75a.75.75 0 0 0 .53-1.28L16 10Zm-8-.75a.75.75 0 0 0 0 1.5v-1.5Zm5.47-.72 2 2 1.06-1.06-2-2-1.06 1.06Zm2.53.72H8v1.5h8v-1.5Zm-6.53 7.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8 14v-.75a.75.75 0 0 0-.53 1.28L8 14Zm8 .75a.75.75 0 0 0 0-1.5v1.5Zm-5.47.72-2-2-1.06 1.06 2 2 1.06-1.06ZM8 14.75h8v-1.5H8v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowTransferRectangleHalf);
export default ForwardRef;
