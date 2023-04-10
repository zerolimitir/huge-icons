import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemoveLeft = (
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
            d='M10.288 4A4.402 4.402 0 0 0 7.35 5.131L3.524 8.56c-2.032 1.821-2.032 5.059 0 6.88l3.826 3.43A4.402 4.402 0 0 0 10.29 20h7.248C20.002 20 22 17.953 22 15.429V8.57C22 6.047 20.002 4 17.537 4h-7.249Zm1.242 4.47a.75.75 0 1 0-1.06 1.06L12.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06L14 13.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L15.06 12l2.47-2.47a.75.75 0 0 0-1.06-1.06L14 10.94l-2.47-2.47Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveLeft);
export default ForwardRef;
