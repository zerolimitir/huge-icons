import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPaintBucket = (
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
            d='M13.484 3.109a2.98 2.98 0 0 0-4.185 0l-7.044 6.97a2.922 2.922 0 0 0 0 4.165l4.696 4.647a2.98 2.98 0 0 0 4.185 0l6.175-6.11 3.022-1.496a.75.75 0 0 0 .195-1.205l-7.044-6.971Zm5.242 7.298-2.032 1.005H3.098a1.44 1.44 0 0 1 .212-.266l7.044-6.971a1.48 1.48 0 0 1 2.075 0l6.296 6.232Zm1.26 10.578c1 0 2-.593 2-2.25s-2-3.75-2-3.75-2 2.093-2 3.75 1 2.25 2 2.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaintBucket);
export default ForwardRef;
