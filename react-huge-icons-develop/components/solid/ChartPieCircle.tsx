import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartPieCircle = (
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
            d='M14.34 7.622a4.964 4.964 0 0 0-1.59-.53V2.029a10 10 0 0 1 9.222 9.222h-5.065a4.963 4.963 0 0 0-2.567-3.628ZM6.444 3.685a10 10 0 0 1 4.806-1.657v5.065A4.964 4.964 0 0 0 8 14.94l-3.581 3.58A10 10 0 0 1 6.444 3.686ZM5.48 19.581a10 10 0 0 0 12.83.178l-4.51-3.133A4.97 4.97 0 0 1 9.061 16l-3.582 3.581ZM16.587 13.9c.153-.37.26-.757.32-1.15h5.065a10 10 0 0 1-2.553 5.955l-4.204-2.923c.6-.51 1.07-1.155 1.372-1.882Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPieCircle);
export default ForwardRef;
