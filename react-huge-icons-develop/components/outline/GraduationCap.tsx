import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGraduationCap = (
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
            d='m11.106 5.447-.336-.67.336.67ZM2 10l-.335-.671a.75.75 0 0 0 0 1.342L2 10Zm10.894 4.553.336.67-.336-.67ZM22 10l.335.67a.75.75 0 0 0 0-1.341l-.335.67Zm-9.106-4.553.336-.67-.336.67Zm-1.788 9.106-.336.67.336-.67ZM17.25 12v4h1.5v-4h-1.5ZM15 18.25H9v1.5h6v-1.5ZM6.75 16v-4h-1.5v4h1.5ZM9 18.25A2.25 2.25 0 0 1 6.75 16h-1.5A3.75 3.75 0 0 0 9 19.75v-1.5ZM17.25 16A2.25 2.25 0 0 1 15 18.25v1.5A3.75 3.75 0 0 0 18.75 16h-1.5ZM10.77 4.776 1.665 9.33l.67 1.342 9.106-4.553-.67-1.342Zm2.46 10.447 9.105-4.552-.67-1.342-9.106 4.553.67 1.341Zm-.671-9.105 9.106 4.553.67-1.342-9.105-4.553-.671 1.342Zm-1.118 7.764L2.335 9.329l-.67 1.342 9.105 4.552.671-1.341Zm1.118 0a1.25 1.25 0 0 1-1.118 0l-.67 1.341a2.75 2.75 0 0 0 2.459 0l-.671-1.341Zm-1.118-7.764a1.25 1.25 0 0 1 1.118 0l.67-1.342a2.75 2.75 0 0 0-2.459 0l.671 1.342Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M22 10v6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGraduationCap);
export default ForwardRef;
