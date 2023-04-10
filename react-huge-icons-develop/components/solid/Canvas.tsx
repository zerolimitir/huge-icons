import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCanvas = (
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
            d='M12 1.25a.75.75 0 0 1 .75.75v1H17a3 3 0 0 1 3 3v9a3 3 0 0 1-2.795 2.993l1.491 3.728a.75.75 0 1 1-1.392.558L15.592 18H12.75v3a.75.75 0 0 1-1.5 0v-3H8.408l-1.712 4.279a.75.75 0 0 1-1.392-.558l1.49-3.728A3 3 0 0 1 4 15V6a3 3 0 0 1 3-3h4.25V2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCanvas);
export default ForwardRef;
