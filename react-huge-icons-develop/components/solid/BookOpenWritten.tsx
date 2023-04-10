import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookOpenWritten = (
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
            d='M11.25 5.378C9.131 3.922 6.19 3.26 3.994 3.011 2.896 2.887 2 3.804 2 4.935V16.2c0 1.131.896 2.048 1.994 2.172 2.196.248 5.137.911 7.256 2.367V5.38Zm1.5 15.361c2.119-1.456 5.06-2.119 7.256-2.367C21.104 18.248 22 17.332 22 16.2V4.935c0-1.131-.896-2.048-1.994-1.924-2.195.248-5.137.911-7.256 2.367V20.74ZM4.259 8.14a.75.75 0 0 1 .856-.626c1.303.202 2.77.54 4.156 1.075a.75.75 0 1 1-.542 1.4c-1.258-.487-2.615-.802-3.844-.992a.75.75 0 0 1-.626-.856Zm.856 3.375a.75.75 0 1 0-.23 1.482c.62.096 1.273.223 1.932.39a.75.75 0 0 0 .366-1.455 22.689 22.689 0 0 0-2.068-.417Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenWritten);
export default ForwardRef;
