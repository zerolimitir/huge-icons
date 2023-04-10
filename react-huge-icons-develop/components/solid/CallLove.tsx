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
            fillRule='evenodd'
            d='M21 17.354V19a2 2 0 0 1-2 2C10.163 21 3 13.837 3 5a2 2 0 0 1 2-2h1.646a2 2 0 0 1 1.857 1.257l.814 2.034a2 2 0 0 1-.963 2.532L8 9s.5 2.5 2.5 4.5S15 16 15 16l.177-.354a2 2 0 0 1 2.532-.963l2.034.814A2 2 0 0 1 21 17.354Zm-5.062-9.306-1.512-1.89A1.944 1.944 0 0 1 14 4.942v-.087a1.856 1.856 0 0 1 3.169-1.312l.331.331.331-.331A1.856 1.856 0 0 1 21 4.856v.087c0 .442-.15.87-.426 1.214l-1.512 1.89a2 2 0 0 1-3.124 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallLove);
export default ForwardRef;
