import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClockRectangleShort = (
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
            d='M12.75 9a.75.75 0 0 0-1.5 0h1.5Zm-.197 3.276.335-.67-.335.67Zm1.112 1.395a.75.75 0 1 0 .67-1.342l-.67 1.342ZM11.25 9v2.382h1.5V9h-1.5Zm.967 3.947 1.448.724.67-1.342-1.447-.723-.67 1.341Zm-.967-1.565c0 .663.374 1.269.967 1.565l.671-1.341a.25.25 0 0 1-.138-.224h-1.5ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm1 4.5h10v-1.5H7v1.5ZM18.25 7v10h1.5V7h-1.5ZM17 18.25H7v1.5h10v-1.5ZM5.75 17V7h-1.5v10h1.5ZM7 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 19.75v-1.5ZM18.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 17h-1.5ZM17 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 17 4.25v1.5ZM7 4.25A2.75 2.75 0 0 0 4.25 7h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockRectangleShort);
export default ForwardRef;
