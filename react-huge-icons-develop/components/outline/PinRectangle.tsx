import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPinRectangle = (
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
            d='M15 15h1.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 16.44A4 4 0 0 1 7.873 15H9'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v10'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinRectangle);
export default ForwardRef;
