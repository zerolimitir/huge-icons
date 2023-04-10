import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoreVertical = (
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
        <path fill='currentColor' d='M12.5 11.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z' />
        <path
            fill='currentColor'
            d='M12.5 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;
