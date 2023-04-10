import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgViewOff = (
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
            d='M2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c1.66 0 3.234-.53 4.643-1.296l2.827 2.826a.75.75 0 1 0 1.06-1.06l-16-16a.75.75 0 0 0-1.06 1.06l2.575 2.575C4.782 7.975 3.7 8.98 2.87 9.853ZM9 12a3 3 0 0 0 4.524 2.585l-4.109-4.109A2.986 2.986 0 0 0 9 12Zm12.13-2.147a3.085 3.085 0 0 1 0 4.294 21.835 21.835 0 0 1-2.032 1.89l-4.099-4.098A3 3 0 0 0 12.061 9L8.72 5.658C9.754 5.25 10.857 5 11.999 5c3.816 0 7.175 2.795 9.131 4.853Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgViewOff);
export default ForwardRef;
