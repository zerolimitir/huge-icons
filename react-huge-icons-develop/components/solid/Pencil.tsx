import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPencil = (
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
            d='M20.183 3.816a2.787 2.787 0 0 0-3.94 0l-1.406 1.405 3.941 3.942 1.405-1.405a2.787 2.787 0 0 0 0-3.942Zm-2.465 6.407-3.941-3.941-8.99 8.99c-.56.56-.94 1.277-1.088 2.055l-.424 2.229a1 1 0 0 0 1.17 1.17l2.228-.425a3.951 3.951 0 0 0 2.055-1.088l8.99-8.99Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;
