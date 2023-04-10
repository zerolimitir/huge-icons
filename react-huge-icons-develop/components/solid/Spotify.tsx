import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpotify = (
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
            d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM6.279 9.696c1.106-.442 3.083-.694 5.267-.572 2.174.121 4.425.607 6.09 1.532a.75.75 0 1 0 .728-1.312C16.43 8.27 13.93 7.755 11.63 7.627c-2.29-.128-4.514.12-5.908.678a.75.75 0 0 0 .558 1.392Zm.437 3.023c.737-.222 2.378-.467 4.285-.407 1.906.06 3.98.425 5.635 1.344a.75.75 0 1 0 .728-1.312c-1.946-1.08-4.288-1.467-6.315-1.531-2.026-.064-3.835.19-4.765.469a.75.75 0 0 0 .432 1.437Zm0 3c1.553-.466 5.559-.93 8.92.937a.75.75 0 1 0 .728-1.311c-3.839-2.133-8.3-1.597-10.08-1.063a.75.75 0 1 0 .432 1.437Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpotify);
export default ForwardRef;
