import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCallLove = (
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
            d='m14.426 6.157 1.512 1.89a2 2 0 0 0 3.124 0l1.512-1.89c.276-.344.426-.772.426-1.214v-.087a1.856 1.856 0 0 0-3.169-1.312l-.331.331-.331-.331A1.856 1.856 0 0 0 14 4.856v.087c0 .442.15.87.426 1.214Z'
        />
        <path
            fill='currentColor'
            d='M21 19v-1.646a2 2 0 0 0-1.257-1.857l-2.034-.813a2 2 0 0 0-2.532.962L15 16s-2.5-.5-4.5-2.5S8 9 8 9l.354-.177a2 2 0 0 0 .963-2.532l-.814-2.034A2 2 0 0 0 6.646 3H5a2 2 0 0 0-2 2c0 8.837 7.163 16 16 16a2 2 0 0 0 2-2Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallLove);
export default ForwardRef;
