import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClockCircleShort = (
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
            d='M12.75 9a.75.75 0 0 0-1.5 0h1.5Zm-.197 3.276.335-.67-.335.67Zm1.112 1.395a.75.75 0 1 0 .67-1.342l-.67 1.342ZM11.25 9v2.382h1.5V9h-1.5Zm.967 3.947 1.448.724.67-1.342-1.447-.723-.67 1.341Zm-.967-1.565c0 .663.374 1.269.967 1.565l.671-1.341a.25.25 0 0 1-.138-.224h-1.5Zm10 .618A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM18.25 12A6.25 6.25 0 0 1 12 18.25v1.5A7.75 7.75 0 0 0 19.75 12h-1.5ZM12 18.25A6.25 6.25 0 0 1 5.75 12h-1.5A7.75 7.75 0 0 0 12 19.75v-1.5ZM5.75 12A6.25 6.25 0 0 1 12 5.75v-1.5A7.75 7.75 0 0 0 4.25 12h1.5ZM12 5.75A6.25 6.25 0 0 1 18.25 12h1.5A7.75 7.75 0 0 0 12 4.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockCircleShort);
export default ForwardRef;
