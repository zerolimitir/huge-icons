import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlusThin = (
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
            d='M12.75 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 12a.75.75 0 0 0 1.5 0h-1.5ZM18 12.75a.75.75 0 0 0 0-1.5v1.5Zm-12-1.5a.75.75 0 0 0 0 1.5v-1.5ZM11.25 6v12h1.5V6h-1.5ZM18 11.25H6v1.5h12v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlusThin);
export default ForwardRef;
