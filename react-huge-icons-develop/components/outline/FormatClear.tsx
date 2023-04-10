import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFormatClear = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='m5 5 14 14' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m10.58 9.64-1.322 9.254a.75.75 0 0 0 1.485.212l1.162-8.14L10.58 9.64Zm1.59-.53.573-4.004a.75.75 0 0 0-1.485-.212l-.413 2.89L12.17 9.11Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.44 4.5A.75.75 0 0 0 6 5.75h.69L5.44 4.5Zm3.37 1.25H18a.75.75 0 0 0 0-1.5H7.31l1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatClear);
export default ForwardRef;
