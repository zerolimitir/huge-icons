import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMenuLineVerticalHalf = (
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
            d='M12.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm9.5-10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm-4-5v10h1.5V7h-1.5Zm-4 5v5h1.5v-5h-1.5Zm8-5v5h1.5V7h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuLineVerticalHalf);
export default ForwardRef;
