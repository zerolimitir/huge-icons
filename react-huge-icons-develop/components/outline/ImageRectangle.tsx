import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageRectangle = (
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
            d='M21.562 14.609a.75.75 0 0 0 .876-1.218l-.876 1.218Zm-2.501-2.725-.438.609.438-.61Zm-5.013.273.502.557-.502-.557Zm-4.096 3.686.502.558-.502-.558Zm-5.013.273.438-.609-.438.61Zm-2.5-2.725a.75.75 0 0 0-.877 1.218l.876-1.218ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm16.438 12.141L19.5 11.275l-.876 1.218 2.939 2.116.876-1.218ZM13.546 11.6 9.45 15.286l1.004 1.115 4.096-3.687-1.004-1.115Zm-8.169 3.908-2.939-2.116-.876 1.218L4.5 16.725l.876-1.218Zm4.073-.221a3.25 3.25 0 0 1-4.073.221l-.876 1.218a4.75 4.75 0 0 0 5.953-.324L9.45 15.286Zm10.05-4.01a4.75 4.75 0 0 0-5.954.323l1.004 1.115a3.25 3.25 0 0 1 4.073-.221l.876-1.218ZM10.25 8.5a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5ZM8.5 10.25A1.75 1.75 0 0 1 6.75 8.5h-1.5a3.25 3.25 0 0 0 3.25 3.25v-1.5ZM6.75 8.5c0-.966.784-1.75 1.75-1.75v-1.5A3.25 3.25 0 0 0 5.25 8.5h1.5ZM8.5 6.75c.966 0 1.75.784 1.75 1.75h1.5A3.25 3.25 0 0 0 8.5 5.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageRectangle);
export default ForwardRef;
